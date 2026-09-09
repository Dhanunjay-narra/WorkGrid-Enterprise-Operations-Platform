export function generateInventorySuppliersSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
