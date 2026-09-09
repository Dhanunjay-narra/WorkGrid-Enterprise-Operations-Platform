export function generateInventoryReorderSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
