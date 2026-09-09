export function generateInventoryOrdersTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
