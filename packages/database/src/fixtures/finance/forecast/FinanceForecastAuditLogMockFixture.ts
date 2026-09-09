export function generateFinanceForecastAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
