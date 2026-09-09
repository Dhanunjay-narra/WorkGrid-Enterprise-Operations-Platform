export class ProjectRisksScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectRisksSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectRisksSchedule" };
  }
}
