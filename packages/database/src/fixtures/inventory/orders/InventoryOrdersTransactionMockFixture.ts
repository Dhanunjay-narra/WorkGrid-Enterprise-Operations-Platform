export function generateInventoryOrdersTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
