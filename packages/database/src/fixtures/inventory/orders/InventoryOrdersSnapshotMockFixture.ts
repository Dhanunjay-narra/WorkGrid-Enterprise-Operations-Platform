export function generateInventoryOrdersSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
