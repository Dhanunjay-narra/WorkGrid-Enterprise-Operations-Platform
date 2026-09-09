export function generateInventorySuppliersPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
