export function generateInventoryTransfersQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
