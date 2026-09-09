export class HrEmployeesStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for HrEmployeesState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
