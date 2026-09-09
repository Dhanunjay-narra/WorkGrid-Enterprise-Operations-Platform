export function generateBiForecastsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
