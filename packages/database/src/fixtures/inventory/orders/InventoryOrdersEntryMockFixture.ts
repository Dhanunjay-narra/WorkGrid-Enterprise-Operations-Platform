export function generateInventoryOrdersEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
