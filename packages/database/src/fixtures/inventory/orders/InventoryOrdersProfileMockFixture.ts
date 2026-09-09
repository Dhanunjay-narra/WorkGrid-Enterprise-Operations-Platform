export function generateInventoryOrdersProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
