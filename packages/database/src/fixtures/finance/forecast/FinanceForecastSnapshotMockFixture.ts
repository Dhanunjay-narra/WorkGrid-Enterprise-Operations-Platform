export function generateFinanceForecastSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
