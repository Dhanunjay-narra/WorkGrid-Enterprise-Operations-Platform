export function generateSupportSurveysTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
