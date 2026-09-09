export function generateCrmForecastingPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
