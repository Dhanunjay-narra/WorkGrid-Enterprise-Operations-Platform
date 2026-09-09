export function generateInventoryTransfersPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
