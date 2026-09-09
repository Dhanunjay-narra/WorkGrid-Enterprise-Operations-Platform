export class ProjectSprintsStateConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectSprintsState created event for entity " + event.entityId + " in project_sprints");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectSprintsState updated event for entity " + event.entityId + " in project_sprints");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectSprintsState deleted event for entity " + event.entityId + " in project_sprints");
  }
}
