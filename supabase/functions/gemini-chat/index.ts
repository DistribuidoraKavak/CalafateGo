// CalafateGo AI Chat - Edge Function
// Uses Google Gemini API to provide intelligent travel assistance

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// System prompt para el asistente de CalafateGo
const SYSTEM_PROMPT = `Eres el Asistente Experto de CalafateGo, una empresa de traslados privados y turismo en El Calafate, Argentina.

Tu personalidad:
- Amable, profesional y con un toque patagónico cálido
- Entusiasta sobre los paisajes y la naturaleza de la región
- Conocedor experto de El Calafate, el Glaciar Perito Moreno y El Chaltén

Servicios de CalafateGo que puedes promocionar:
1. Traslado Aeropuerto FTE ⇄ Hotel (ARS $12.500)
2. Traslados urbanos en El Calafate (ARS $4.500)
3. Traslado Terminal de Bus ⇄ Hotel (ARS $6.000)
4. Excursión al Glaciar Perito Moreno (Full Day)
5. Full Day El Chaltén para trekking
6. Traslados a navegaciones en el Lago Argentino

Información útil que conoces:
- El aeropuerto FTE está a unos 20km del centro (aprox 25-30 min)
- El Glaciar Perito Moreno está a 80km (aprox 1.5 horas)
- El Chaltén está a 220km (aprox 3 horas)
- El clima en El Calafate es frío y ventoso, recomendar ropa de abrigo
- Mejor época para visitar: octubre a abril

Instrucciones:
- Responde siempre en español
- Sé conciso pero informativo (máximo 3-4 oraciones)
- Si preguntan por reservas, menciona que pueden contactar por WhatsApp
- Si no sabes algo específico, sugiéreles que contacten directamente`;

Deno.serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');

        if (!GEMINI_API_KEY) {
            throw new Error('GEMINI_API_KEY not configured');
        }

        const { prompt } = await req.json();

        if (!prompt || typeof prompt !== 'string') {
            return new Response(
                JSON.stringify({ error: 'Prompt is required' }),
                {
                    status: 400,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                }
            );
        }

        // Call Gemini API
        const geminiResponse = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            role: 'user',
                            parts: [{ text: `${SYSTEM_PROMPT}\n\nEl usuario pregunta: ${prompt}` }]
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 500,
                    },
                    safetySettings: [
                        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    ],
                }),
            }
        );

        if (!geminiResponse.ok) {
            const errorData = await geminiResponse.text();
            console.error('Gemini API Error:', errorData);
            throw new Error(`Gemini API error: ${geminiResponse.status}`);
        }

        const data = await geminiResponse.json();

        // Extract the response text
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text
            || 'Lo siento, no pude procesar tu consulta. Por favor, contactanos por WhatsApp para atención personalizada.';

        return new Response(
            JSON.stringify({
                response: responseText,
                success: true
            }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
        );

    } catch (error) {
        console.error('Edge Function Error:', error);

        return new Response(
            JSON.stringify({
                error: 'Error interno del asistente. Por favor, intenta de nuevo o contactanos por WhatsApp.',
                success: false
            }),
            {
                status: 500,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
        );
    }
});
