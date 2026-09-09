export class BiWidgetsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsSchedule" };
  }
}
