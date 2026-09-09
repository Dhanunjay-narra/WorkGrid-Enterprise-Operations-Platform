export function generateCrmForecastingTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
