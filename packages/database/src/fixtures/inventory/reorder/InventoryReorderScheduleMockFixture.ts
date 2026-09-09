export function generateInventoryReorderScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
