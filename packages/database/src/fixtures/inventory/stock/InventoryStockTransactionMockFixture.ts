export function generateInventoryStockTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
