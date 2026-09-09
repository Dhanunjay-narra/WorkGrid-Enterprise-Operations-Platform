export class ProjectSprintsAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectSprintsAssignment created event for entity " + event.entityId + " in project_sprints");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectSprintsAssignment updated event for entity " + event.entityId + " in project_sprints");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectSprintsAssignment deleted event for entity " + event.entityId + " in project_sprints");
  }
}
