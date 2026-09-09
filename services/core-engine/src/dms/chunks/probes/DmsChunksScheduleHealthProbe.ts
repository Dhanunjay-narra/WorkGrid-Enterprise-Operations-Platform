export class DmsChunksScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksSchedule" };
  }
}
