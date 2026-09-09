export function generateInventoryReorderStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
