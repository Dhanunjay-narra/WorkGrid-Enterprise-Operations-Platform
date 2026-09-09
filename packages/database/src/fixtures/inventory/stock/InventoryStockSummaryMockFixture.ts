export function generateInventoryStockSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
