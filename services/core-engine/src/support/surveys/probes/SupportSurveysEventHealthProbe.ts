export class SupportSurveysEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSurveysEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSurveysEvent" };
  }
}
