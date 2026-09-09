export class AiEvaluationsItemConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEvaluationsItem created event for entity " + event.entityId + " in ai_evaluations");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEvaluationsItem updated event for entity " + event.entityId + " in ai_evaluations");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEvaluationsItem deleted event for entity " + event.entityId + " in ai_evaluations");
  }
}
