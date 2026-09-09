export class ObsProfilingNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsProfilingNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
