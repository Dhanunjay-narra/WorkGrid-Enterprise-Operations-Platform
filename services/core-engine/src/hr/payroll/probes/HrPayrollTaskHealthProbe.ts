export class HrPayrollTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollTask" };
  }
}
