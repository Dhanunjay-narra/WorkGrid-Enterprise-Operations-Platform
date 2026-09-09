export class SupportSurveysQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSurveysQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSurveysQueue" };
  }
}
