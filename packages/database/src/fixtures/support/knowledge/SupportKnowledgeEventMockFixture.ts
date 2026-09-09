export function generateSupportKnowledgeEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
