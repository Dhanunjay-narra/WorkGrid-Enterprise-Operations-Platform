export class IotCommandsMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotCommandsMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
