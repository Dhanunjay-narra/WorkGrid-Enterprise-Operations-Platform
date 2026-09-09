export function generateInventoryStockAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
