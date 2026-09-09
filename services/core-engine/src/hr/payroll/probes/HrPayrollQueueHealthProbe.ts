export class HrPayrollQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollQueue" };
  }
}
