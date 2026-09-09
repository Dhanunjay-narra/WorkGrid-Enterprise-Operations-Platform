export function generateInventoryStockPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_stock",
    entity: "InventoryStockPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
