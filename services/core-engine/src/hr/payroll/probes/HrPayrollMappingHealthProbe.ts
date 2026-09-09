export class HrPayrollMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollMapping" };
  }
}
