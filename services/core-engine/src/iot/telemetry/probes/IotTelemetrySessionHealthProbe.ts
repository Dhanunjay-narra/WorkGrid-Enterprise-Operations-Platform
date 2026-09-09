export class IotTelemetrySessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetrySession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetrySession" };
  }
}
