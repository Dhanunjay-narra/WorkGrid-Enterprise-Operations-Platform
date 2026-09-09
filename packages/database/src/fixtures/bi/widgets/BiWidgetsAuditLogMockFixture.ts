export function generateBiWidgetsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
