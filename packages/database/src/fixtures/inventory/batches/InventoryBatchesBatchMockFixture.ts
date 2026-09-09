export function generateInventoryBatchesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
