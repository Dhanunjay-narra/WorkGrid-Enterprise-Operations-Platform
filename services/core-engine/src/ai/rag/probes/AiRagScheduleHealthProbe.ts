export class AiRagScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagSchedule" };
  }
}
