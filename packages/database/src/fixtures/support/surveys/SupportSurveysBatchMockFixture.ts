export function generateSupportSurveysBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
