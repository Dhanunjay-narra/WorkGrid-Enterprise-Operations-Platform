export function generateInventoryReorderRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
