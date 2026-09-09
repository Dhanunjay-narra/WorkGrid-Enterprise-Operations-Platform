export function generateAiRagNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
