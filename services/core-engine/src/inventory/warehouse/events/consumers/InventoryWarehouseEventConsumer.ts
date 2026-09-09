export class InventoryWarehouseEventConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryWarehouseEvent created event for entity " + event.entityId + " in inventory_warehouse");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryWarehouseEvent updated event for entity " + event.entityId + " in inventory_warehouse");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventoryWarehouseEvent deleted event for entity " + event.entityId + " in inventory_warehouse");
  }
}
