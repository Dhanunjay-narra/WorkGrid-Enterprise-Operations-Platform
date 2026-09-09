export function generateInventoryTransfersProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
