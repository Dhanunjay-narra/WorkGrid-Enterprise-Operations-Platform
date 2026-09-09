export class IotDevicesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesSchedule" };
  }
}
