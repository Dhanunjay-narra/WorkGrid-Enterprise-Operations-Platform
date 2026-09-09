export function generateInventoryOrdersPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
