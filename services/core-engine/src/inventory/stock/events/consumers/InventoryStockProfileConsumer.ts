export class InventoryStockProfileConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryStockProfile created event for entity " + event.entityId + " in inventory_stock");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryStockProfile updated event for entity " + event.entityId + " in inventory_stock");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryStockProfile deleted event for entity " + event.entityId + " in inventory_stock");
  }
}
