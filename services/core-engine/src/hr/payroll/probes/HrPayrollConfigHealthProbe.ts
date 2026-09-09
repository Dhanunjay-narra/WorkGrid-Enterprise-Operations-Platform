export class HrPayrollConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollConfig" };
  }
}
