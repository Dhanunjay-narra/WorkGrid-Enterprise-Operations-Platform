export function generateInventoryWarehouseSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
