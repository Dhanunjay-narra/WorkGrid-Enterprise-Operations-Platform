export class SupportSurveysScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSurveysSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSurveysSchedule" };
  }
}
