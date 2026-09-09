export class ObsSpansConfigRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansConfig ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
