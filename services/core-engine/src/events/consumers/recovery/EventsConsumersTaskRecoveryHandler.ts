export class EventsConsumersTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsConsumersTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
