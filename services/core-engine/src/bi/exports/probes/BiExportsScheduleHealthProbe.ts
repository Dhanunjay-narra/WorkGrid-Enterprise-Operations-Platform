export class BiExportsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsSchedule" };
  }
}
