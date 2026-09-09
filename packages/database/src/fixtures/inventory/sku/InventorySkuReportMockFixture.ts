export function generateInventorySkuReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
