export function generateInventoryOrdersBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
