export function generateInventoryReorderMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
