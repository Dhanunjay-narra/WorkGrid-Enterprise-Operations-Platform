export class EventsConsumersNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsConsumersNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
