export function generateSupportSurveysMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
