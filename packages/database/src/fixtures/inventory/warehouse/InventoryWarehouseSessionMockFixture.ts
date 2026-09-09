export function generateInventoryWarehouseSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
