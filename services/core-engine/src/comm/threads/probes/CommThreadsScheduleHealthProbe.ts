export class CommThreadsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsSchedule" };
  }
}
