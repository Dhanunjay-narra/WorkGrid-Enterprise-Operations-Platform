export class InventoryTransfersRecordConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryTransfersRecord created event for entity " + event.entityId + " in inventory_transfers");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryTransfersRecord updated event for entity " + event.entityId + " in inventory_transfers");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryTransfersRecord deleted event for entity " + event.entityId + " in inventory_transfers");
  }
}
