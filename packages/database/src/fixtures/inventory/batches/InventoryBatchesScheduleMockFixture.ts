export function generateInventoryBatchesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
