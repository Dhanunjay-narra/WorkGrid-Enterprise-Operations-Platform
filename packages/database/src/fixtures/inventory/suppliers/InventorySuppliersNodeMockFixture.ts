export function generateInventorySuppliersNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
