export function generateInventorySuppliersMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
