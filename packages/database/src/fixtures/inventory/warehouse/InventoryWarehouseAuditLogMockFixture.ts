export function generateInventoryWarehouseAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
