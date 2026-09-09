export function generateInventoryOrdersRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
