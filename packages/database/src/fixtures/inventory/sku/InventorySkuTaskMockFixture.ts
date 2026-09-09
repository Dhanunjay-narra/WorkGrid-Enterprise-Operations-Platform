export function generateInventorySkuTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
