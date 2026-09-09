export function generateInventoryOrdersQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
