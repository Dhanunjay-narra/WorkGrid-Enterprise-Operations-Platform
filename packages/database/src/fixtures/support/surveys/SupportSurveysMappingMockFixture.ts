export function generateSupportSurveysMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
