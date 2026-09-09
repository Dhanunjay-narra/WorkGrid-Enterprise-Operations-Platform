export function generateInventoryBatchesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
