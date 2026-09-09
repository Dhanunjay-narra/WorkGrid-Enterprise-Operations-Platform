export function generateInventorySuppliersAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
