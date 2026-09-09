export function generateInventorySuppliersStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
