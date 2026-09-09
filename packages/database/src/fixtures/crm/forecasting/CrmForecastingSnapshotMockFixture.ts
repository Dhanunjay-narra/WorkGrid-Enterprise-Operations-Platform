export function generateCrmForecastingSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
