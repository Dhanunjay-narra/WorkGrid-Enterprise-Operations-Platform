export function generateInventoryBatchesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
