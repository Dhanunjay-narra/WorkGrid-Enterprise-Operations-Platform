export class ProjectEpicsBatchConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectEpicsBatch created event for entity " + event.entityId + " in project_epics");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectEpicsBatch updated event for entity " + event.entityId + " in project_epics");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectEpicsBatch deleted event for entity " + event.entityId + " in project_epics");
  }
}
