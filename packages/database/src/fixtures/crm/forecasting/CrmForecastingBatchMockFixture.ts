export function generateCrmForecastingBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
