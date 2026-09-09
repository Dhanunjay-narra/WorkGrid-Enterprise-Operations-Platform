export function generateInventoryReorderThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
