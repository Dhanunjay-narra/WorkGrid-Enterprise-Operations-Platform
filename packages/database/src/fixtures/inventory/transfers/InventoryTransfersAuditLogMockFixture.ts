export function generateInventoryTransfersAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
