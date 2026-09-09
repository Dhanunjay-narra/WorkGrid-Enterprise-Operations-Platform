export function generateSupportKnowledgeSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
