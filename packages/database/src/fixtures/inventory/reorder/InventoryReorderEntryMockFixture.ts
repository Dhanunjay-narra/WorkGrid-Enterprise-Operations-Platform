export function generateInventoryReorderEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
