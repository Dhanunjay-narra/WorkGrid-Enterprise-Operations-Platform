export function generateInventoryOrdersConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
