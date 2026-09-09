export function generateCrmForecastingQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
