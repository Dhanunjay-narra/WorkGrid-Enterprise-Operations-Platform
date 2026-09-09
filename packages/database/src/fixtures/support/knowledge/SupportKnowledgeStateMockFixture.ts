export function generateSupportKnowledgeStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
