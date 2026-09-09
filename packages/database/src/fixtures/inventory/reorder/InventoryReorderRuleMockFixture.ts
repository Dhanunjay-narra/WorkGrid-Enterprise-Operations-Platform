export function generateInventoryReorderRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
