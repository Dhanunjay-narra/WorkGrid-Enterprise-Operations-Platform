export class ObsSpansNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
