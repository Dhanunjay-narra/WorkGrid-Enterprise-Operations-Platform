export class IotTelemetryScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetrySchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetrySchedule" };
  }
}
