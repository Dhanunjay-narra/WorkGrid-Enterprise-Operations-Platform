export class InventoryTransfersQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryTransfersQueue created event for entity " + event.entityId + " in inventory_transfers");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryTransfersQueue updated event for entity " + event.entityId + " in inventory_transfers");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryTransfersQueue deleted event for entity " + event.entityId + " in inventory_transfers");
  }
}
