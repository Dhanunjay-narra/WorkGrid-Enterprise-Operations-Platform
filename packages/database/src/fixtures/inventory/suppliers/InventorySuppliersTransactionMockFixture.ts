export function generateInventorySuppliersTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
