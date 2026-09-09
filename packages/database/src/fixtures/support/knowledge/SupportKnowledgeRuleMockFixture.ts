export function generateSupportKnowledgeRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
