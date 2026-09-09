export function generateInventoryBatchesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
