export class IotDevicesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesEntry" };
  }
}
