export class IntMappingsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsSchedule" };
  }
}
