export function generateInventoryReorderConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
