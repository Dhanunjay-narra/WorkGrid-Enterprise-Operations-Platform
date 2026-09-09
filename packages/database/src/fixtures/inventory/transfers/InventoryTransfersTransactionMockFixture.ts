export function generateInventoryTransfersTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
