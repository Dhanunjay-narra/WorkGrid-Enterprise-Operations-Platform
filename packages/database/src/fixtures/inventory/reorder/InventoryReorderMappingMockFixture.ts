export function generateInventoryReorderMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
