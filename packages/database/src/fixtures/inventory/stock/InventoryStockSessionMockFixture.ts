export function generateInventoryStockSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
