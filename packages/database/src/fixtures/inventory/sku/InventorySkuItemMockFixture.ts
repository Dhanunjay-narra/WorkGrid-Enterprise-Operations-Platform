export function generateInventorySkuItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
