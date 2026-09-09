export function generateCrmForecastingScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
