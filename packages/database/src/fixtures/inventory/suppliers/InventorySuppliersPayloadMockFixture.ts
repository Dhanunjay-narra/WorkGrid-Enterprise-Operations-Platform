export function generateInventorySuppliersPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
