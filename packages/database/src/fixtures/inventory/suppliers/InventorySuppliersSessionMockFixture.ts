export function generateInventorySuppliersSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
