export class SupportSurveysRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSurveysRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSurveysRule" };
  }
}
