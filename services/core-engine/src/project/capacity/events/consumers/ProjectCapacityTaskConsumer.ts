export class ProjectCapacityTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacityTask created event for entity " + event.entityId + " in project_capacity");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacityTask updated event for entity " + event.entityId + " in project_capacity");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacityTask deleted event for entity " + event.entityId + " in project_capacity");
  }
}
