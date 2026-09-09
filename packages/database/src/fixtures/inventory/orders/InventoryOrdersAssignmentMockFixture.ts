export function generateInventoryOrdersAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
