export function generateInventoryOrdersStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
