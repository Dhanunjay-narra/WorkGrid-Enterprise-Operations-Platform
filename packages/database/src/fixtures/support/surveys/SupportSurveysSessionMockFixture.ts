export function generateSupportSurveysSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
