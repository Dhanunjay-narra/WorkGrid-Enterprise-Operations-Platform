export function generateInventoryWarehouseEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
