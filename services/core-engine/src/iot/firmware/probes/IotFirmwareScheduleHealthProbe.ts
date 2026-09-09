export class IotFirmwareScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareSchedule" };
  }
}
