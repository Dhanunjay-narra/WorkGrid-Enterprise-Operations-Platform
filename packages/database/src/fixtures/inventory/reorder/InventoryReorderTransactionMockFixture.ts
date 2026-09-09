export function generateInventoryReorderTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_reorder",
    entity: "InventoryReorderTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
