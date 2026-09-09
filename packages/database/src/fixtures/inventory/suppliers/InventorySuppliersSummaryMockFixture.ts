export function generateInventorySuppliersSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
