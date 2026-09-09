export function generateInventoryBatchesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
