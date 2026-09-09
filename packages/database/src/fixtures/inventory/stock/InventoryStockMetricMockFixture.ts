export function generateInventoryStockMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
