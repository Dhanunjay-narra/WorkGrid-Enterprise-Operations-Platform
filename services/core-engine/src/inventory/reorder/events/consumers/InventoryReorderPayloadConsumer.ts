export class InventoryReorderPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryReorderPayload created event for entity " + event.entityId + " in inventory_reorder");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryReorderPayload updated event for entity " + event.entityId + " in inventory_reorder");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryReorderPayload deleted event for entity " + event.entityId + " in inventory_reorder");
  }
}
