export function generateSupportKnowledgeMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
