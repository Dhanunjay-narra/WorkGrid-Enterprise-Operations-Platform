export function generateSupportSurveysPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
