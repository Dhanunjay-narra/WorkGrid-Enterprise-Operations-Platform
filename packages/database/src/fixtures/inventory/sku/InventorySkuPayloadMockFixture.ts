export function generateInventorySkuPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
