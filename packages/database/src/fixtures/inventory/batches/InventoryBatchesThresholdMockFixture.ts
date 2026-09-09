export function generateInventoryBatchesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
