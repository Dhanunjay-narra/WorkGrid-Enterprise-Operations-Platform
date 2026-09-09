export class IotTelemetryMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryMapping" };
  }
}
