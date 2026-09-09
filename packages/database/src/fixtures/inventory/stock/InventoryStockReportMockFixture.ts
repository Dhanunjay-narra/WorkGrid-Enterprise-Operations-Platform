export function generateInventoryStockReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
