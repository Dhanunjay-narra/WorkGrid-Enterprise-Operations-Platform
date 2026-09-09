export class SupportSurveysNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSurveysNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSurveysNode" };
  }
}
