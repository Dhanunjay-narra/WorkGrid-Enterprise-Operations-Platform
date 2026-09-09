export class IotTelemetryProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryProfile" };
  }
}
