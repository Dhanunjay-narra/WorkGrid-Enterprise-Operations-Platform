export function generateInventoryWarehousePayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "inventory_warehouse",
    entity: "InventoryWarehousePayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
