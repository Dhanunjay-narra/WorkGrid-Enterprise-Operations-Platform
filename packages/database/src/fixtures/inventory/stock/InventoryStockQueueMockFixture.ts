export function generateInventoryStockQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
