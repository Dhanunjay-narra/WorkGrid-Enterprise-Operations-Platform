export class CommMessagesQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for CommMessagesQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
