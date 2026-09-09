export function generateInventoryStockTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
