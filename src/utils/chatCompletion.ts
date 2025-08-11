import { InferenceClient } from "@huggingface/inference";

export default async function chatCompletionXai(
  role: string,
  content: string,
): Promise<string> {
  const client = new InferenceClient(
    process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY || "",
  );

  const chatCompletion = await client.chatCompletion({
    provider: "novita",
    model: "deepseek-ai/DeepSeek-V3-0324",
    messages: [
      {
        role: "system",
        content: `Você é uma especializada em análise preliminar de sintomas para sugerir diagnósticos possíveis.  
🩺 **Função**: Fornecer diagnósticos preliminares.
📚 **Estilo**: Objetivo, técnico.
⚠️ **Aviso**: Sempre recomende procurar atendimento médico para confirmação e tratamento.
resposta direta e concisa e curta.
`,
      },
      {
        role: role,
        content: content,
      },
    ],
  });
  return chatCompletion.choices[0].message.content ?? "";
}
