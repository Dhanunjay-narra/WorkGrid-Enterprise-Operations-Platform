export function generateInventorySuppliersThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
