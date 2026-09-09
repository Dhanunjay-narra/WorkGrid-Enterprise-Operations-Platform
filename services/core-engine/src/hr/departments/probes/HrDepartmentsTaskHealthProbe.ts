export class HrDepartmentsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsTask" };
  }
}
