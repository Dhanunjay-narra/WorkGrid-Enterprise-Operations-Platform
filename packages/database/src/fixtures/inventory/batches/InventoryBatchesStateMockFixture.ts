export function generateInventoryBatchesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
