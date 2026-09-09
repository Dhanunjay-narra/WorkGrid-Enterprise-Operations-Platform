export function generateInventoryTransfersRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
