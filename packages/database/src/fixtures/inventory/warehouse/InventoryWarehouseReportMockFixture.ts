export function generateInventoryWarehouseReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehouseReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
