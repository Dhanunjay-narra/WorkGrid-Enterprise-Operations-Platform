export class InventoryBatchesAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryBatchesAuditLog created event for entity " + event.entityId + " in inventory_batches");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryBatchesAuditLog updated event for entity " + event.entityId + " in inventory_batches");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryBatchesAuditLog deleted event for entity " + event.entityId + " in inventory_batches");
  }
}
