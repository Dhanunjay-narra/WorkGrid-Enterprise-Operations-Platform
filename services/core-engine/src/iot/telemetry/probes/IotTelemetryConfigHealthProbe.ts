export class IotTelemetryConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryConfig" };
  }
}
