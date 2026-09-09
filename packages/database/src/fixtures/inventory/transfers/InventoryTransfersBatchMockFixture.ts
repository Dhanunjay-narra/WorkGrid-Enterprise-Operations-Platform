export function generateInventoryTransfersBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
