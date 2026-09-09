export function generateInventoryOrdersReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
