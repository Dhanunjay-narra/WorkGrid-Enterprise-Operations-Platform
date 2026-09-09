export function generateCrmForecastingItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
