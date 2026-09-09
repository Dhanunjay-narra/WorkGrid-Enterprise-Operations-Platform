export class HrPayrollTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollTransaction" };
  }
}
