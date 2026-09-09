export class HrPayrollProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollProfile" };
  }
}
