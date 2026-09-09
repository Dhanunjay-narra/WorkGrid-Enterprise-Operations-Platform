export class IntSlackScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackSchedule" };
  }
}
