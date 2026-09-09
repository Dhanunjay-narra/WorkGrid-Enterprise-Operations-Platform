export class SupportSurveysThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSurveysThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSurveysThreshold" };
  }
}
