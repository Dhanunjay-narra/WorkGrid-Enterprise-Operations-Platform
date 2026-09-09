export function generateInventoryOrdersScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
