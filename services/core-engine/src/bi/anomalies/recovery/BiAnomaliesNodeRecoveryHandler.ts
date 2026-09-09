export class BiAnomaliesNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for BiAnomaliesNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
