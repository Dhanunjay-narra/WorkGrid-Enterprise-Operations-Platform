export function generateInventorySuppliersEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
