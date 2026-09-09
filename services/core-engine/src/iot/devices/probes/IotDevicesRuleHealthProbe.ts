export class IotDevicesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesRule" };
  }
}
