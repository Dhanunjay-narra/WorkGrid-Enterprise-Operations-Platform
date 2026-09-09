export function generateInventoryOrdersEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
