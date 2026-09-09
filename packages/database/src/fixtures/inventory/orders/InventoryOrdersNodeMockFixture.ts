export function generateInventoryOrdersNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
