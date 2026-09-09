export function generateInventoryWarehouseEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
