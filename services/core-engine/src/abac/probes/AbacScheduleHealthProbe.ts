export class AbacScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacSchedule" };
  }
}
