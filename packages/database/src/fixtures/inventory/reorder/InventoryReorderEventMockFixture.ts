export function generateInventoryReorderEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
