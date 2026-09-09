export function generateSupportKnowledgeBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
