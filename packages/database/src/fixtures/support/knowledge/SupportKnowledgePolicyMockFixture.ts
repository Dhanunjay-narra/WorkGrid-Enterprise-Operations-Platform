export function generateSupportKnowledgePolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgePolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
