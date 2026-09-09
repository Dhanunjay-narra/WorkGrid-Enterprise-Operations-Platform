export function generateInventorySuppliersAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
