export function generateInventoryWarehouseProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
