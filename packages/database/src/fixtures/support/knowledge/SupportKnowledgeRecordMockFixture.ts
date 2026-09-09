export function generateSupportKnowledgeRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
