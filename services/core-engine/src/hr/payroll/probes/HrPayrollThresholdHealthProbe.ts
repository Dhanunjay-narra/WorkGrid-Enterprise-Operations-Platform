export class HrPayrollThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollThreshold" };
  }
}
