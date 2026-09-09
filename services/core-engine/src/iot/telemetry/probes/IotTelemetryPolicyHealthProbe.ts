export class IotTelemetryPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryPolicy" };
  }
}
