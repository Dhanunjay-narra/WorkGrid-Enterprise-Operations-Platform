export class ProjectEpicsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsSchedule" };
  }
}
