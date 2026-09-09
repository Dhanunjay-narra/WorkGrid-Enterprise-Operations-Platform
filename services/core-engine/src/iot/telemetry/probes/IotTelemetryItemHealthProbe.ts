export class IotTelemetryItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryItem" };
  }
}
