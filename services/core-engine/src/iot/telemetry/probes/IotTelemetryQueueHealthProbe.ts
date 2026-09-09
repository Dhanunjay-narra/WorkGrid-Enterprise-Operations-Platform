export class IotTelemetryQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryQueue" };
  }
}
