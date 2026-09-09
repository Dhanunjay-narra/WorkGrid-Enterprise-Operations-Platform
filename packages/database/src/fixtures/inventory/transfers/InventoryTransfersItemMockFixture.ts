export function generateInventoryTransfersItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
