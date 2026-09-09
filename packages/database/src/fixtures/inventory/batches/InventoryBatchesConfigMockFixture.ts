export function generateInventoryBatchesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
