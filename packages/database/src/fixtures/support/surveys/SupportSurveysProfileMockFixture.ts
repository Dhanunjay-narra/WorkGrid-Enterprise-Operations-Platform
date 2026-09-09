export function generateSupportSurveysProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
