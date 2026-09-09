export function generateInventoryWarehouseThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
