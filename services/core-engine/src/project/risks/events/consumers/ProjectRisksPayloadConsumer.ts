export class ProjectRisksPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectRisksPayload created event for entity " + event.entityId + " in project_risks");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectRisksPayload updated event for entity " + event.entityId + " in project_risks");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectRisksPayload deleted event for entity " + event.entityId + " in project_risks");
  }
}
