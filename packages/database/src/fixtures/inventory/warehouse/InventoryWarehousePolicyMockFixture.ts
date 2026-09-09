export function generateInventoryWarehousePolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehousePolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
