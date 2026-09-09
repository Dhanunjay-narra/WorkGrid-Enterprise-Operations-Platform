export function generateInventoryOrdersRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
