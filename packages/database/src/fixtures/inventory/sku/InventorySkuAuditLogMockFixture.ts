export function generateInventorySkuAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
