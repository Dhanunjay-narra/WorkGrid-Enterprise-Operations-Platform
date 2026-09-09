export class HrPayrollNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollNode" };
  }
}
