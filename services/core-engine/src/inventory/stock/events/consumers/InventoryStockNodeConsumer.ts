export class InventoryStockNodeConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryStockNode created event for entity " + event.entityId + " in inventory_stock");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryStockNode updated event for entity " + event.entityId + " in inventory_stock");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryStockNode deleted event for entity " + event.entityId + " in inventory_stock");
  }
}
