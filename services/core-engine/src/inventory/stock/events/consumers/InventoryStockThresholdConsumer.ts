export class InventoryStockThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryStockThreshold created event for entity " + event.entityId + " in inventory_stock");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryStockThreshold updated event for entity " + event.entityId + " in inventory_stock");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryStockThreshold deleted event for entity " + event.entityId + " in inventory_stock");
  }
}
