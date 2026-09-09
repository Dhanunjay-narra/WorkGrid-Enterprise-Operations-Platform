export function generateInventoryWarehouseRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
