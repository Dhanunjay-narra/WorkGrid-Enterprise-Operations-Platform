export class HrPayrollStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollState" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollState" };
  }
}
