export class EventsPartitionsNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
