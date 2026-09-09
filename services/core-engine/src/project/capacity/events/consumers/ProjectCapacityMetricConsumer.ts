export class ProjectCapacityMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacityMetric created event for entity " + event.entityId + " in project_capacity");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacityMetric updated event for entity " + event.entityId + " in project_capacity");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacityMetric deleted event for entity " + event.entityId + " in project_capacity");
  }
}
