export function generateInventorySkuSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
