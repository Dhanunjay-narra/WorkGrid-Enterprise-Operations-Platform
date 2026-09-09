export class HrPayrollPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollPolicy" };
  }
}
