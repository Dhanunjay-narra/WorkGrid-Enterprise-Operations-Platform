export function generateHrPerformanceAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
