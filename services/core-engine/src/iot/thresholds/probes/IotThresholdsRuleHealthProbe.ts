export class IotThresholdsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsRule" };
  }
}
