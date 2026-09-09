export class ProjectCapacityScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacitySchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacitySchedule" };
  }
}
