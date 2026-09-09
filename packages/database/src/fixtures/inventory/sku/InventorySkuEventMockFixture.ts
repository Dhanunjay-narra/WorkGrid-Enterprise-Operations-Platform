export function generateInventorySkuEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
