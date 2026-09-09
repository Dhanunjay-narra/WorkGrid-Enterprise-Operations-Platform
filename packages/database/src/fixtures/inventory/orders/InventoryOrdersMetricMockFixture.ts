export function generateInventoryOrdersMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
