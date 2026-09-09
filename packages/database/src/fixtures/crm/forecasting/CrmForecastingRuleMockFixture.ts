export function generateCrmForecastingRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
