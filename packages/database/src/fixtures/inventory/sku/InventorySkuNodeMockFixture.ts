export function generateInventorySkuNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
