export function generateSupportKnowledgeTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
