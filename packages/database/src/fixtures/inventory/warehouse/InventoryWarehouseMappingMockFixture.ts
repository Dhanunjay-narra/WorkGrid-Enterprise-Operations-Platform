export function generateInventoryWarehouseMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
