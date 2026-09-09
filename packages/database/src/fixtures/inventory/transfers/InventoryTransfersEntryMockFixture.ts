export function generateInventoryTransfersEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
