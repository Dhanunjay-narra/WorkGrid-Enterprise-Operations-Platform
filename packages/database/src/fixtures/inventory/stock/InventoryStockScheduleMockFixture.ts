export function generateInventoryStockScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
