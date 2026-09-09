export function generateInventoryTransfersMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
