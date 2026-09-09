export function generateInventoryBatchesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
