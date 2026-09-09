export function generateInventoryReorderPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
