export class InventorySkuEventConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuEvent created event for entity " + event.entityId + " in inventory_sku");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuEvent updated event for entity " + event.entityId + " in inventory_sku");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuEvent deleted event for entity " + event.entityId + " in inventory_sku");
  }
}
