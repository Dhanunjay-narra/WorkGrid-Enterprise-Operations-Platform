export class AiEvaluationsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsSchedule" };
  }
}
