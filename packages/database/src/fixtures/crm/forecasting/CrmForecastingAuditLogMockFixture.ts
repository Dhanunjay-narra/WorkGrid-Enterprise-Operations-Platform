export function generateCrmForecastingAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
