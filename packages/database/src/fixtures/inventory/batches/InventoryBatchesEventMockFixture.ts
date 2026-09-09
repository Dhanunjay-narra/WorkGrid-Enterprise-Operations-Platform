export function generateInventoryBatchesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
