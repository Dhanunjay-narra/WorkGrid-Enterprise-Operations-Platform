export function generateInventoryStockProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
