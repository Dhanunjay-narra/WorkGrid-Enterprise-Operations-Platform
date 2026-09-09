export function generateInventoryTransfersNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
