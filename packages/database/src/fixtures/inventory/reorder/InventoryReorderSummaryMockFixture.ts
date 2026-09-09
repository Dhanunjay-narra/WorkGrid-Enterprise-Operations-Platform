export function generateInventoryReorderSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
