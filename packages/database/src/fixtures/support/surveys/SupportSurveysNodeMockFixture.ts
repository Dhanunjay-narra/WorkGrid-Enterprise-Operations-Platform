export function generateSupportSurveysNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
