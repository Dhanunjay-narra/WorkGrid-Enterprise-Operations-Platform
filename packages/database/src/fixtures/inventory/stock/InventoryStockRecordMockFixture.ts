export function generateInventoryStockRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
