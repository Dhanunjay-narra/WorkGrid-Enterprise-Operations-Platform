export function generateSupportKnowledgeTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
