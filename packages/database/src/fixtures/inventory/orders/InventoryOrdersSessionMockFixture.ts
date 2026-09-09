export function generateInventoryOrdersSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
