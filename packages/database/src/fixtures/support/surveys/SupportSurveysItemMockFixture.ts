export function generateSupportSurveysItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
