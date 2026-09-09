export function generateInventoryReorderNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
