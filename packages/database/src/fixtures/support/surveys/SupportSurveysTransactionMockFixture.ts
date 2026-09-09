export function generateSupportSurveysTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
