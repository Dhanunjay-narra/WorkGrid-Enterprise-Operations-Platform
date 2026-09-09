export function generateInventorySuppliersItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
