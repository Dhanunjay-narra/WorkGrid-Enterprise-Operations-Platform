export function generateInventoryTransfersAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
