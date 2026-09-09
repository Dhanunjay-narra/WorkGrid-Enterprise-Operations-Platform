export function generateInventorySuppliersScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
