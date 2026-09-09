export function generateInventoryWarehouseTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
