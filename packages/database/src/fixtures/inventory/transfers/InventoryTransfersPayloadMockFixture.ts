export function generateInventoryTransfersPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
