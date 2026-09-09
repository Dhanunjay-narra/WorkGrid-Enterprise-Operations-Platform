export function generateInventoryTransfersConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_transfers",
    entity: "InventoryTransfersConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
