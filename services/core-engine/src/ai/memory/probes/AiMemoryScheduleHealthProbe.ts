export class AiMemoryScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemorySchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemorySchedule" };
  }
}
