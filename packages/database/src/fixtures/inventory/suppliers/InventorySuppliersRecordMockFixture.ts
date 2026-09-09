export function generateInventorySuppliersRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
