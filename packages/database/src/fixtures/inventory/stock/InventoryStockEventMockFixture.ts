export function generateInventoryStockEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
