export function generateInventoryStockRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
