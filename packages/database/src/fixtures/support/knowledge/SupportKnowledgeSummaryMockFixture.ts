export function generateSupportKnowledgeSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
