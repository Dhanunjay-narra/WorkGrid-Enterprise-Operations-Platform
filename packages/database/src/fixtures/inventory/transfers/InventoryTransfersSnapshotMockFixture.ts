export function generateInventoryTransfersSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
