export function generateSupportKnowledgeEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
