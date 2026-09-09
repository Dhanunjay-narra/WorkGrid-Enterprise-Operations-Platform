export function generateSupportSurveysReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
