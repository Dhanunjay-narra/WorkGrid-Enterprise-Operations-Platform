export function generateInventoryReorderProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
