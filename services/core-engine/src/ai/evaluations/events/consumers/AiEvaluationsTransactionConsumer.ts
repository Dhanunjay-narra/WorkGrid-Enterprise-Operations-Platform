export class AiEvaluationsTransactionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEvaluationsTransaction created event for entity " + event.entityId + " in ai_evaluations");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEvaluationsTransaction updated event for entity " + event.entityId + " in ai_evaluations");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEvaluationsTransaction deleted event for entity " + event.entityId + " in ai_evaluations");
  }
}
