export class SupportCsatReportConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportCsatReport created event for entity " + event.entityId + " in support_csat");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportCsatReport updated event for entity " + event.entityId + " in support_csat");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportCsatReport deleted event for entity " + event.entityId + " in support_csat");
  }
}
