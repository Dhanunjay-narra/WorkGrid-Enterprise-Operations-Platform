export function generateInventoryStockThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
