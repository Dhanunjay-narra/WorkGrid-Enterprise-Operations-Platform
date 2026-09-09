export function generateInventoryBatchesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
