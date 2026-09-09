export function generateInventoryBatchesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
