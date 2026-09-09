export function generateSupportSurveysEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
