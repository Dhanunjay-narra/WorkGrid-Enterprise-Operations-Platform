export function generateInventoryReorderPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
