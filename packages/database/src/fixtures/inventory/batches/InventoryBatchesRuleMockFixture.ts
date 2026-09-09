export function generateInventoryBatchesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
