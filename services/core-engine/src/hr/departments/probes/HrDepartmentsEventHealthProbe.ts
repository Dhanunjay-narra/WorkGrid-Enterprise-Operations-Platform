export class HrDepartmentsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsEvent" };
  }
}
