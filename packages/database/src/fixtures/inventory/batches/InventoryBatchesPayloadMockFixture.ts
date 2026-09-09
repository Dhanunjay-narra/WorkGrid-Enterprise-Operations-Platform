export function generateInventoryBatchesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
