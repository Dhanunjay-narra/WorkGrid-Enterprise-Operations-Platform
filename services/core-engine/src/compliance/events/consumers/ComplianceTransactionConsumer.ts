export class ComplianceTransactionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ComplianceTransaction created event for entity " + event.entityId + " in compliance");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ComplianceTransaction updated event for entity " + event.entityId + " in compliance");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ComplianceTransaction deleted event for entity " + event.entityId + " in compliance");
  }
}
