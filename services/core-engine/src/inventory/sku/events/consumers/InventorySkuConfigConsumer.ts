export class InventorySkuConfigConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuConfig created event for entity " + event.entityId + " in inventory_sku");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuConfig updated event for entity " + event.entityId + " in inventory_sku");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySkuConfig deleted event for entity " + event.entityId + " in inventory_sku");
  }
}
