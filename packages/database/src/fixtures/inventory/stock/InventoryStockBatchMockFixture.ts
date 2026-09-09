export function generateInventoryStockBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
