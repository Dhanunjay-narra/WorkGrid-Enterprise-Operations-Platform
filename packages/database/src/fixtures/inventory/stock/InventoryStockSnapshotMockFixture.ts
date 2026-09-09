export function generateInventoryStockSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
