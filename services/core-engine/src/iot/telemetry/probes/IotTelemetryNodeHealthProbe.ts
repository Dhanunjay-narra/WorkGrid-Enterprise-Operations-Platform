export class IotTelemetryNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryNode" };
  }
}
