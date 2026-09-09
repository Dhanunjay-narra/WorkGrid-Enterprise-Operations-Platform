export function generateCrmForecastingPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
