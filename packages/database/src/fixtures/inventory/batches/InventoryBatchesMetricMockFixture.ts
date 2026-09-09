export function generateInventoryBatchesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
