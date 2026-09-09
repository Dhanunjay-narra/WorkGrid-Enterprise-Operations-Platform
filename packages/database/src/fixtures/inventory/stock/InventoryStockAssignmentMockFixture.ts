export function generateInventoryStockAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
