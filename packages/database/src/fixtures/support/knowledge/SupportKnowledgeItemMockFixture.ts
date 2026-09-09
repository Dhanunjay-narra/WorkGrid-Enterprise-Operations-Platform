export function generateSupportKnowledgeItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
