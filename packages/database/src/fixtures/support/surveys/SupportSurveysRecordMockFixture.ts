export function generateSupportSurveysRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
