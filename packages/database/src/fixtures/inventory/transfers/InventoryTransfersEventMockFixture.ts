export function generateInventoryTransfersEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
