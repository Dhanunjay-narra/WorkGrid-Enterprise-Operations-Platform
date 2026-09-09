export function generateSupportKnowledgePayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgePayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
