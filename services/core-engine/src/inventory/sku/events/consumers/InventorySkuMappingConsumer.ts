export class InventorySkuMappingConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuMapping created event for entity " + event.entityId + " in inventory_sku");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuMapping updated event for entity " + event.entityId + " in inventory_sku");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuMapping deleted event for entity " + event.entityId + " in inventory_sku");
  }
}
