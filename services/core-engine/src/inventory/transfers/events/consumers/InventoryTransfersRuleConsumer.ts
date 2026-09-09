export class InventoryTransfersRuleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryTransfersRule created event for entity " + event.entityId + " in inventory_transfers");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryTransfersRule updated event for entity " + event.entityId + " in inventory_transfers");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryTransfersRule deleted event for entity " + event.entityId + " in inventory_transfers");
  }
}
