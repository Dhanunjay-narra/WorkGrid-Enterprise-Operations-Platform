export function generateInventorySuppliersQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_suppliers",
    entity: "InventorySuppliersQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
