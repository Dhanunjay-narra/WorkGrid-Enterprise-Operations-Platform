export function generateInventoryTransfersReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
