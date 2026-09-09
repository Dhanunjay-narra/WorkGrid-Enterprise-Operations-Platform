export class ProjectEpicsRecordConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectEpicsRecord created event for entity " + event.entityId + " in project_epics");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectEpicsRecord updated event for entity " + event.entityId + " in project_epics");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectEpicsRecord deleted event for entity " + event.entityId + " in project_epics");
  }
}
