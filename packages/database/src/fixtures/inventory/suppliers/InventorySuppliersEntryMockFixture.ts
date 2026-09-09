export function generateInventorySuppliersEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
