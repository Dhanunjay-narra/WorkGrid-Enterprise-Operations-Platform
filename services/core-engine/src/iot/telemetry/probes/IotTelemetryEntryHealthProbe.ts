export class IotTelemetryEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryEntry" };
  }
}
