export function generateInventoryBatchesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
