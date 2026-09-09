export class InventorySuppliersBatchConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySuppliersBatch created event for entity " + event.entityId + " in inventory_suppliers");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySuppliersBatch updated event for entity " + event.entityId + " in inventory_suppliers");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySuppliersBatch deleted event for entity " + event.entityId + " in inventory_suppliers");
  }
}
