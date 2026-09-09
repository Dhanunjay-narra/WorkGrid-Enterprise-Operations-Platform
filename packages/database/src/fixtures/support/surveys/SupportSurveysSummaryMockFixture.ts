export function generateSupportSurveysSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
