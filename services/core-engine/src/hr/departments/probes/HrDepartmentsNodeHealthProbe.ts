export class HrDepartmentsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsNode" };
  }
}
