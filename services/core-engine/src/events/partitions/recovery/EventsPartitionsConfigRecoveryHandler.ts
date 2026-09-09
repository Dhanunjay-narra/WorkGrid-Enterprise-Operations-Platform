export class EventsPartitionsConfigRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsConfig ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
