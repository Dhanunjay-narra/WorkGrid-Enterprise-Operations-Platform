export function generateInventoryOrdersMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_orders",
    entity: "InventoryOrdersMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
