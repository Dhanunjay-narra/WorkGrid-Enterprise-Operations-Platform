export function generateInventoryWarehouseBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
