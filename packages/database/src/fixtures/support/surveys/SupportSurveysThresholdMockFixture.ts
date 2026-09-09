export function generateSupportSurveysThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
