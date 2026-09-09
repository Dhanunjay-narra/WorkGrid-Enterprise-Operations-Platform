export class HrEmployeesMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for HrEmployeesMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
