export function generateInventoryStockMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
