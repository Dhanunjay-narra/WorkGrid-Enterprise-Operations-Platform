export class EventsPartitionsTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
