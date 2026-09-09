export function generateInventorySuppliersMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
