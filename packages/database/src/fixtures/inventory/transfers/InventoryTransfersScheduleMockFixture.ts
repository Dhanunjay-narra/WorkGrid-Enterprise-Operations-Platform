export function generateInventoryTransfersScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
