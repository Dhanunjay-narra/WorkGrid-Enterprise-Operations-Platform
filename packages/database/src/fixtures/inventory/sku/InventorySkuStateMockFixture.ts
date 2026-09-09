export function generateInventorySkuStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
