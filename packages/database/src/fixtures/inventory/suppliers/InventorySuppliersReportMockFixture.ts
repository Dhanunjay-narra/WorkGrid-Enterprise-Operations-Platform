export function generateInventorySuppliersReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
