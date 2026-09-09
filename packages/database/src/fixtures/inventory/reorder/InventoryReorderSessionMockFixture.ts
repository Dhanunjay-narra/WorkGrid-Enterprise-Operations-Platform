export function generateInventoryReorderSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
