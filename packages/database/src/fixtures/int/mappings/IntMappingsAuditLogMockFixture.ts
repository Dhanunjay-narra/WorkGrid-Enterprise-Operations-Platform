export function generateIntMappingsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
