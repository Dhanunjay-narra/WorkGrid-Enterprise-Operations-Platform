export class IotTelemetryTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryTransaction" };
  }
}
