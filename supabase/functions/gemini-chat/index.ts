// CalafateGo AI Chat - Edge Function
// Uses Google Gemini API to provide intelligent travel assistance

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// System prompt para el asistente de CalafateGo
// System prompt para el asistente de CalafateGo
const SYSTEM_PROMPT = `Eres el Asistente Experto de CalafateGo, una empresa premium de traslados privados y turismo en El Calafate, Patagonia Argentina.

Tu personalidad:
- Amable, profesional, hospitalario y con un toque cálido patagónico.
- Entusiasta sobre los paisajes y la naturaleza de la región.
- Conocedor experto de El Calafate, Glaciar Perito Moreno, El Chaltén y Torres del Paine.

Tus instrucciones principales:
1. NO DAR PRECIOS ESPECÍFICOS: Los precios pueden variar o requerir consulta. En lugar de dar un número, invita amablemente al usuario a revisar el detalle y tarifas actualizadas en nuestra sección de servicios o contactarnos.
2. DIRIGIR A LA WEB: Si el usuario muestra interés en un servicio, sugiérele visitar la sección correspondiente en la página web (/servicios) para ver fotos y detalles.
3. OBJETIVO: Tu meta es asistir al usuario, resolver dudas operativas (distancias, clima, tiempos) y motivarlos a reservar con nosotros.

Servicios Disponibles (CalafateGo):
- Traslados Privados:
  * Aeropuerto FTE (IN/OUT): Recepción personalizada.
  * Traslado a El Chaltén: Ruta 40, paradas fotográficas.
  * Traslado a Puerto Bandera: Para navegaciones.
  * Traslados urbanos: Glaciarium, Cuevas del Walichu, cenas.
  * Larga distancia: Río Gallegos, Torres del Paine.

- Excursiones (con partners de confianza):
  * Glaciar Perito Moreno (Full Day): Tiempo libre en pasarelas.
  * El Chaltén Full Day: Visita por el día a la capital del trekking.
  * Navegaciones: Todo Glaciares, Safari Azul, Minitrekking, Big Ice.
  * Torres del Paine (Full Day Chile).

Información de contexto útil:
- El Aeropuerto (FTE) está a 20km del centro (aprox 25 min).
- El Glaciar Perito Moreno está a 80km (aprox 1h 20min).
- El Chaltén está a 220km (aprox 3 horas por tramo).
- Clima: Ventoso y cambiante. Recomendar siempre "vestirse en capas" (cebolla).
- Época ideal: Octubre a Abril.

Instrucciones de respuesta:
- Responde siempre en español.
- Sé conciso (máximo 3-4 oraciones).
- Si preguntan por disponibilidad inmediata, sugiere contactar por el botón de WhatsApp.`;

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
