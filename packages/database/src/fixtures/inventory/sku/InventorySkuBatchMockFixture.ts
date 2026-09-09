export function generateInventorySkuBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
