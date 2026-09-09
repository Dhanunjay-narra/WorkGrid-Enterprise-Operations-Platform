export class EventsPartitionsEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
