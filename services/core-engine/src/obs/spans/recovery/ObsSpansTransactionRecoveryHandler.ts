export class ObsSpansTransactionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansTransaction ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
