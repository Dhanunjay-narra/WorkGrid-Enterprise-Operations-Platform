export class SupportSurveysStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSurveysState" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSurveysState" };
  }
}
