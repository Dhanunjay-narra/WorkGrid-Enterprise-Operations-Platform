export class ProjectEpicsConfigConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectEpicsConfig created event for entity " + event.entityId + " in project_epics");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectEpicsConfig updated event for entity " + event.entityId + " in project_epics");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectEpicsConfig deleted event for entity " + event.entityId + " in project_epics");
  }
}
