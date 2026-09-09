export function generateInventoryBatchesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
