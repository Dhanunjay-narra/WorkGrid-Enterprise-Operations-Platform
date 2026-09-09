export function generateInventoryTransfersRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
