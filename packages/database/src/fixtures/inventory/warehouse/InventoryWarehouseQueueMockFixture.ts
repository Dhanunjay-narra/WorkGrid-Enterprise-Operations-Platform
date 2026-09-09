export function generateInventoryWarehouseQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
