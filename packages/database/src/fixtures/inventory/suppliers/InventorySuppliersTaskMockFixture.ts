export function generateInventorySuppliersTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
