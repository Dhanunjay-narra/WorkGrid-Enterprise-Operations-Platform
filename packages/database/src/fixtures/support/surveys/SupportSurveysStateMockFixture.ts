export function generateSupportSurveysStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
