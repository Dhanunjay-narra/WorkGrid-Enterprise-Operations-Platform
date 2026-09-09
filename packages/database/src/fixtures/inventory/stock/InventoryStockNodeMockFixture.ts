export function generateInventoryStockNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
