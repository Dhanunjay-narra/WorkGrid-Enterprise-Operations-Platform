export function generateInventoryWarehouseRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
