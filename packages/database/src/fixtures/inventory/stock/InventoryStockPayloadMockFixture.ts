export function generateInventoryStockPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
