export function generateSupportSurveysQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
