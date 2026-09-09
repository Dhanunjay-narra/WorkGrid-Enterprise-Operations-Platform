export function generateInventoryWarehouseAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
