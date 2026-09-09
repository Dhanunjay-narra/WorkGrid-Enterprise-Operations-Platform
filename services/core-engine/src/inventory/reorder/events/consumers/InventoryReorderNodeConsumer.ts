export class InventoryReorderNodeConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryReorderNode created event for entity " + event.entityId + " in inventory_reorder");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryReorderNode updated event for entity " + event.entityId + " in inventory_reorder");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryReorderNode deleted event for entity " + event.entityId + " in inventory_reorder");
  }
}
