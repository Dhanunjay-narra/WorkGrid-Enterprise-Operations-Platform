export function generateSupportSurveysScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
