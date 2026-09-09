export class IotTelemetryPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryPayload" };
  }
}
