export function generateInventoryTransfersTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
