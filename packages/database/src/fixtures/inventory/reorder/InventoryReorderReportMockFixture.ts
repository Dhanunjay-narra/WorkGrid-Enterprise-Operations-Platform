export function generateInventoryReorderReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
