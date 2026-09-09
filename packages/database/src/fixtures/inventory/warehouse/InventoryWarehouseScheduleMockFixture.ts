export function generateInventoryWarehouseScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
