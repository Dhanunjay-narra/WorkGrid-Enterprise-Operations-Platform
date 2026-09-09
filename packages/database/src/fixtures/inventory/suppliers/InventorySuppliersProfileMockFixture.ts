export function generateInventorySuppliersProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
