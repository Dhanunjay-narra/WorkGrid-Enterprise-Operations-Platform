export function generateInventoryOrdersItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
