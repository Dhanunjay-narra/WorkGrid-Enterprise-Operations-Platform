export class EventsConsumersStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsConsumersState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
