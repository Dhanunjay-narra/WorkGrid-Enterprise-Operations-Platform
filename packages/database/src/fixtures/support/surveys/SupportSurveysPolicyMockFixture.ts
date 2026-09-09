export function generateSupportSurveysPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
