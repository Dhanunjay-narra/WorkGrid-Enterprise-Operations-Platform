export class SupportSurveysTransactionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSurveysTransaction created event for entity " + event.entityId + " in support_surveys");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSurveysTransaction updated event for entity " + event.entityId + " in support_surveys");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSurveysTransaction deleted event for entity " + event.entityId + " in support_surveys");
  }
}
