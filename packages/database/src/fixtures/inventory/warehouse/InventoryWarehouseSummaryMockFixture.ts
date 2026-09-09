export function generateInventoryWarehouseSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
