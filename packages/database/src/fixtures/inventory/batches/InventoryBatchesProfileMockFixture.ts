export function generateInventoryBatchesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
