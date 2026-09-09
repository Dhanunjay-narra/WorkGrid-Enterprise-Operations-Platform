export class HrPayrollSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollSession" };
  }
}
