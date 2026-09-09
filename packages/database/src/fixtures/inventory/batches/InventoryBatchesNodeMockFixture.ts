export function generateInventoryBatchesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
