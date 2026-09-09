export class IntSlackRuleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSlackRule created event for entity " + event.entityId + " in int_slack");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSlackRule updated event for entity " + event.entityId + " in int_slack");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSlackRule deleted event for entity " + event.entityId + " in int_slack");
  }
}
