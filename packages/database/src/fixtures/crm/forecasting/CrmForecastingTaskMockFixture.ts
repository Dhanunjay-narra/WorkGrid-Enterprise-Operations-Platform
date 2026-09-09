export function generateCrmForecastingTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
