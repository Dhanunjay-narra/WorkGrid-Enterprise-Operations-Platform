export class SupportSlaSnapshotConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSlaSnapshot created event for entity " + event.entityId + " in support_sla");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSlaSnapshot updated event for entity " + event.entityId + " in support_sla");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSlaSnapshot deleted event for entity " + event.entityId + " in support_sla");
  }
}
