export function generateInventorySkuConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
