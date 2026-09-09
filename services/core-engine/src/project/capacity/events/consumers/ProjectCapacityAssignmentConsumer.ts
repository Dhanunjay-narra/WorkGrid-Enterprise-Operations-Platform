export class ProjectCapacityAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacityAssignment created event for entity " + event.entityId + " in project_capacity");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacityAssignment updated event for entity " + event.entityId + " in project_capacity");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacityAssignment deleted event for entity " + event.entityId + " in project_capacity");
  }
}
