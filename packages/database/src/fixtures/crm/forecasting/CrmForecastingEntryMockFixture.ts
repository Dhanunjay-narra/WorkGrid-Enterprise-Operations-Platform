export function generateCrmForecastingEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
