export class InventoryBatchesNodeConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryBatchesNode created event for entity " + event.entityId + " in inventory_batches");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryBatchesNode updated event for entity " + event.entityId + " in inventory_batches");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryBatchesNode deleted event for entity " + event.entityId + " in inventory_batches");
  }
}
