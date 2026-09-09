export function generateInventoryTransfersSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
