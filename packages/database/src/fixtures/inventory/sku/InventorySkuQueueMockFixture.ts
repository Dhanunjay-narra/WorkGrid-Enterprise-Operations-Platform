export function generateInventorySkuQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
