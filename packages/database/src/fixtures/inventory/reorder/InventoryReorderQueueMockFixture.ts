export function generateInventoryReorderQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
