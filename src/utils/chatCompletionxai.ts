import { InferenceClient } from "@huggingface/inference";

export default async function chatCompletionXai(
  role: string,
  content: string
): Promise<string> {
  const client = new InferenceClient(
    process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY || ""
  );

  const chatCompletion = await client.chatCompletion({
    provider: "novita",
    model: "deepseek-ai/DeepSeek-V3-0324",
    messages: [
      {
        role: "system",
        content: `Você é uma IA médica explicável (XAI) especializada em análise preliminar de sintomas para sugerir diagnósticos possíveis.  
🩺 **Função**: Fornecer diagnósticos preliminares, explicando claramente o raciocínio e a base dos sintomas.
📚 **Estilo**: Objetivo, técnico, porém compreensível para leigos.
⚠️ **Aviso**: Sempre recomende procurar atendimento médico para confirmação e tratamento.  
📝 **Formato de resposta**:
🩺 Diagnóstico Preliminar: [nome da condição]
📚 Explicação: [descrição clara do problema]
🔍 Sintomas analisados: [lista]
⚠️ Recomendação: [orientação]
usar modelo LIME E SHAP para explicar as decisões. SEMPRE EXPLICAR COMO CHEGOU E QUE MEIO USOU PARA CHEGAR ÀS CONCLUSÕES E CITE SUAS FONTES, DEVIDA AS COISAS EM TOPICOS.`,
      },
      {
        role: role,
        content: content,
      },
    ],
  });
  return chatCompletion.choices[0].message.content ?? "";
}
