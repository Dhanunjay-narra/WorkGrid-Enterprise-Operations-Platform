export function generateInventoryTransfersStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
