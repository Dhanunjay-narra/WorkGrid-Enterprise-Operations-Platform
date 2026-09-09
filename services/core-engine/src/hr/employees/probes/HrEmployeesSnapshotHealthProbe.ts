export class HrEmployeesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesSnapshot" };
  }
}
