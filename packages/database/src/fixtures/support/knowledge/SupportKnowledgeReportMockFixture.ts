export function generateSupportKnowledgeReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
