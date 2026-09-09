export function generateSupportSurveysRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
