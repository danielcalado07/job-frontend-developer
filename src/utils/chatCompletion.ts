import { InferenceClient } from "@huggingface/inference";

export default async function chatCompletion(
  role: string,
  content: string,
): Promise<string> {
  const client = new InferenceClient(process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY || "");

  const chatCompletion = await client.chatCompletion({
    provider: "novita",
    model: "deepseek-ai/DeepSeek-V3-0324",
    messages: [
      {
        role: "system",
        content: `Você é a Sofia Bot, assistente virtual da Dolado. Responda em português, com clareza, objetividade e emojis 😊.  
                        Use marcadores, tom amigável em perguntas, confiante em afirmações 💪 e didático em explicações 📚.
                        Dolado: conecta o Brasil tradicional ao digital com: Tecnologia, Logística, Dados, Execução
                        +15 marketplaces | +1M pedidos | IA para escalar operações 🚀  
                        Referências: dolado.com.br | linkedin.com/company/dolado`,
      },
      {
        role: role,
        content: content,
      },
    ],
  });
  return chatCompletion.choices[0].message.content ?? "";
}
