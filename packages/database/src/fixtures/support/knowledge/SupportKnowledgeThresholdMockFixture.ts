export function generateSupportKnowledgeThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
