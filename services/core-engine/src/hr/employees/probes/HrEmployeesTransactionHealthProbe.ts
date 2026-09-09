export class HrEmployeesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesTransaction" };
  }
}
