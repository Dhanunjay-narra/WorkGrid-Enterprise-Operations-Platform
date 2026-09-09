export function generateInventoryWarehouseConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
