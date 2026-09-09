export class HrDepartmentsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsThreshold" };
  }
}
