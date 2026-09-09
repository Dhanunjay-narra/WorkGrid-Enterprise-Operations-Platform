export function generateInventoryReorderAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
