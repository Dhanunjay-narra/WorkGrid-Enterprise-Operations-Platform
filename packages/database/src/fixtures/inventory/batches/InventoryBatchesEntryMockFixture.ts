export function generateInventoryBatchesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
