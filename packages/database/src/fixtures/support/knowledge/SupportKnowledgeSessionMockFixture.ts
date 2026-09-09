export function generateSupportKnowledgeSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
