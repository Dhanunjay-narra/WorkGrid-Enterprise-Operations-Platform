export class ProjectSprintsBatchConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectSprintsBatch created event for entity " + event.entityId + " in project_sprints");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectSprintsBatch updated event for entity " + event.entityId + " in project_sprints");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectSprintsBatch deleted event for entity " + event.entityId + " in project_sprints");
  }
}
