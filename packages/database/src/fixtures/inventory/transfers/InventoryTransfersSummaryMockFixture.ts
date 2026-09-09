export function generateInventoryTransfersSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
