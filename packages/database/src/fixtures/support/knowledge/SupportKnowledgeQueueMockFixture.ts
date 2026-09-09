export function generateSupportKnowledgeQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
