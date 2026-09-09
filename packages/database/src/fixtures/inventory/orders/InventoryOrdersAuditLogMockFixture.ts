export function generateInventoryOrdersAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
