export function generateInventoryTransfersThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
