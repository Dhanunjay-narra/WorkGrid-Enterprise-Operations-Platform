export function generateInventorySkuEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
