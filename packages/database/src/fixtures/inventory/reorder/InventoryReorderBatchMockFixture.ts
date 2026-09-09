export function generateInventoryReorderBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
