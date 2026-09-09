export function generateInventoryStockStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
