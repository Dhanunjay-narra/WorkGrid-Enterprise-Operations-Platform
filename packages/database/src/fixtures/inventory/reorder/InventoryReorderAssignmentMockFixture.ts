export function generateInventoryReorderAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
