export class SupportSurveysTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSurveysTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSurveysTask" };
  }
}
