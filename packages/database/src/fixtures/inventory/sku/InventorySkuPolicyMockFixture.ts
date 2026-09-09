export function generateInventorySkuPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
