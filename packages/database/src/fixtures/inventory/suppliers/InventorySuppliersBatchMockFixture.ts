export function generateInventorySuppliersBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
