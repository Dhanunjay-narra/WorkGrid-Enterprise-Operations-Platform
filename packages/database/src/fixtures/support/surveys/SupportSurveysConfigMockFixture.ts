export function generateSupportSurveysConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
