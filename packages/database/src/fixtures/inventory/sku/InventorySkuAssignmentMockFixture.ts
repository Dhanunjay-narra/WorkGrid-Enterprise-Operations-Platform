export function generateInventorySkuAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
