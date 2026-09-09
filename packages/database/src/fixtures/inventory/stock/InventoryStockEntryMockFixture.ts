export function generateInventoryStockEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
