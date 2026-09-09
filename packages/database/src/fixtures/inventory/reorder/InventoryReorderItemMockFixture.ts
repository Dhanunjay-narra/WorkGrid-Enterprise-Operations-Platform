export function generateInventoryReorderItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
