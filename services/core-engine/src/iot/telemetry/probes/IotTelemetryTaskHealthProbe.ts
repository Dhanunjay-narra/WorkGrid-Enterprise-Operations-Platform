export class IotTelemetryTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryTask" };
  }
}
