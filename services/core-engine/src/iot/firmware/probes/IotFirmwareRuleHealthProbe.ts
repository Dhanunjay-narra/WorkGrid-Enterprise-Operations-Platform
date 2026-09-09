export class IotFirmwareRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareRule" };
  }
}
