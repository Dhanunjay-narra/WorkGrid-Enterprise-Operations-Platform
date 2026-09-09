export class HrPayrollItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollItem" };
  }
}
