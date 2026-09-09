export function generateInventoryOrdersPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
