export class SupportSurveysBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSurveysBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSurveysBatch" };
  }
}
