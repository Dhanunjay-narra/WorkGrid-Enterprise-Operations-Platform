export function generateInventorySkuTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
