export class IotTelemetryEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryEvent" };
  }
}
