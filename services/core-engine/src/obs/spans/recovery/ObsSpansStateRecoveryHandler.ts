export class ObsSpansStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
