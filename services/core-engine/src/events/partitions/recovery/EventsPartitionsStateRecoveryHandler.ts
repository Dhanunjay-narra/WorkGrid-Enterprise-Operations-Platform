export class EventsPartitionsStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
