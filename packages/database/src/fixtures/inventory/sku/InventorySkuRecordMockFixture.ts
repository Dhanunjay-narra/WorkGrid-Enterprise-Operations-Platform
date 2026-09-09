export function generateInventorySkuRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
