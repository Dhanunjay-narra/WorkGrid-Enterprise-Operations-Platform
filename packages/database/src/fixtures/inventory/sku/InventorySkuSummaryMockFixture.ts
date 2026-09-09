export function generateInventorySkuSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
