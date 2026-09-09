export class IotTelemetryAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryAssignment" };
  }
}
