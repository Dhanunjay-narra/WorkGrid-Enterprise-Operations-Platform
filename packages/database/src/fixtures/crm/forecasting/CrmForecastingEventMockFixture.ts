export function generateCrmForecastingEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
