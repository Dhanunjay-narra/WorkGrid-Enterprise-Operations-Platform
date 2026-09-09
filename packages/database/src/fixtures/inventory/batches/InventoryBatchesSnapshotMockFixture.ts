export function generateInventoryBatchesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
