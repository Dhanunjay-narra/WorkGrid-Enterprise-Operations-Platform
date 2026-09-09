export function generateInventorySkuMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
