export function generateSupportKnowledgeMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
