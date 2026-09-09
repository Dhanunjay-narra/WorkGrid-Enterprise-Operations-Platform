export function generateInventorySkuRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
