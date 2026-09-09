export function generateInventoryWarehouseItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
