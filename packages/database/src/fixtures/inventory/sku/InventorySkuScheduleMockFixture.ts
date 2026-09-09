export function generateInventorySkuScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_sku",
    entity: "InventorySkuSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
