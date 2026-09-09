export class SupportEscalationEventConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportEscalationEvent created event for entity " + event.entityId + " in support_escalation");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportEscalationEvent updated event for entity " + event.entityId + " in support_escalation");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportEscalationEvent deleted event for entity " + event.entityId + " in support_escalation");
  }
}
