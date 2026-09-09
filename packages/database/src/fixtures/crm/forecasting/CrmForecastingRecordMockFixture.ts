export function generateCrmForecastingRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
