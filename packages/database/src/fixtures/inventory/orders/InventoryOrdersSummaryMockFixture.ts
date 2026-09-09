export function generateInventoryOrdersSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
