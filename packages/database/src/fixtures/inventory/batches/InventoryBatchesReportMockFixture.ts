export function generateInventoryBatchesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
