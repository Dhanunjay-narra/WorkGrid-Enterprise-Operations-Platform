export class InventorySuppliersMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySuppliersMetric created event for entity " + event.entityId + " in inventory_suppliers");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySuppliersMetric updated event for entity " + event.entityId + " in inventory_suppliers");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed InventorySuppliersMetric deleted event for entity " + event.entityId + " in inventory_suppliers");
  }
}
