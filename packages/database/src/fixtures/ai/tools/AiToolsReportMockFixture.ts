export function generateAiToolsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
