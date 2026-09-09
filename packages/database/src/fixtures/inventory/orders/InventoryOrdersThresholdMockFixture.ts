export function generateInventoryOrdersThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
