export function generateInventorySkuMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
