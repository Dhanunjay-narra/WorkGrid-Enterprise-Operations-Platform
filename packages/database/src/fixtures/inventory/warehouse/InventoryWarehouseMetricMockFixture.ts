export function generateInventoryWarehouseMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
