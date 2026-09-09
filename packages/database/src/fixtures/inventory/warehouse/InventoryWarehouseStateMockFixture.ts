export function generateInventoryWarehouseStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
