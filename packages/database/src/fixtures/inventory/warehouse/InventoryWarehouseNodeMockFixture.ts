export function generateInventoryWarehouseNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
