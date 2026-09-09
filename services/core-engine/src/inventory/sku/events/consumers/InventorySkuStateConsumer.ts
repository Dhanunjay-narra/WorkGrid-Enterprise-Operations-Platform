export class InventorySkuStateConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuState created event for entity " + event.entityId + " in inventory_sku");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuState updated event for entity " + event.entityId + " in inventory_sku");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuState deleted event for entity " + event.entityId + " in inventory_sku");
  }
}
