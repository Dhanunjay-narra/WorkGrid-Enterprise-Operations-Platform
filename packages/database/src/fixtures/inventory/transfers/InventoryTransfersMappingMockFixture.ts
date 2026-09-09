export function generateInventoryTransfersMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
