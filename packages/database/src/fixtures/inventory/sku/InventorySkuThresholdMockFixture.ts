export function generateInventorySkuThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
