export class SupportSurveysEntryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSurveysEntry created event for entity " + event.entityId + " in support_surveys");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSurveysEntry updated event for entity " + event.entityId + " in support_surveys");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSurveysEntry deleted event for entity " + event.entityId + " in support_surveys");
  }
}
