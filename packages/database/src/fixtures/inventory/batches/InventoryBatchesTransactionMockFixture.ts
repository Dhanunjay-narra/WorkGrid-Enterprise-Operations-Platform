export function generateInventoryBatchesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
