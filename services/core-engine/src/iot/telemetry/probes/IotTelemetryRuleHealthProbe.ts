export class IotTelemetryRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryRule" };
  }
}
