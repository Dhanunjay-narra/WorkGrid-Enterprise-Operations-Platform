export function generateInventoryStockItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
