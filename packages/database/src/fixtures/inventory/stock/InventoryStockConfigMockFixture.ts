export function generateInventoryStockConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
