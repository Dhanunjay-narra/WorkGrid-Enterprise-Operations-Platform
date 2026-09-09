export function generateInventoryReorderTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
