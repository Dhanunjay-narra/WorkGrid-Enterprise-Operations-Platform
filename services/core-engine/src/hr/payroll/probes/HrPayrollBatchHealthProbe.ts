export class HrPayrollBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollBatch" };
  }
}
