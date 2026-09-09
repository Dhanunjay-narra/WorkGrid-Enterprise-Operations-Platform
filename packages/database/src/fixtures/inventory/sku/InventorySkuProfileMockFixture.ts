export function generateInventorySkuProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
