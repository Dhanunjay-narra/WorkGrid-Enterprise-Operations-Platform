export function generateInventorySuppliersConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
