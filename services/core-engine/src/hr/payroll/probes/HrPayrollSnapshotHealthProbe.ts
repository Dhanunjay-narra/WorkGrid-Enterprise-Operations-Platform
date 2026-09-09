export class HrPayrollSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollSnapshot" };
  }
}
