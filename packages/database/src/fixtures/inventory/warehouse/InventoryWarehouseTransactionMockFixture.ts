export function generateInventoryWarehouseTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
