export function generateInventorySuppliersRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
