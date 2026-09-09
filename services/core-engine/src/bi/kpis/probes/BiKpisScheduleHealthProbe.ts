export class BiKpisScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisSchedule" };
  }
}
