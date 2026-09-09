export function generateSupportSurveysEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
