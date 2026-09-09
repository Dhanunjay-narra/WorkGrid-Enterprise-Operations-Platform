export function generateInventorySkuSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
