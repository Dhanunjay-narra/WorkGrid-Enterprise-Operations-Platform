export function generateInventoryBatchesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_batches",
    entity: "InventoryBatchesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
