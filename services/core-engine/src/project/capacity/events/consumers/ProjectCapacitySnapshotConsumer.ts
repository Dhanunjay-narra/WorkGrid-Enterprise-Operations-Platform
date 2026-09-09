export class ProjectCapacitySnapshotConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacitySnapshot created event for entity " + event.entityId + " in project_capacity");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacitySnapshot updated event for entity " + event.entityId + " in project_capacity");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacitySnapshot deleted event for entity " + event.entityId + " in project_capacity");
  }
}
