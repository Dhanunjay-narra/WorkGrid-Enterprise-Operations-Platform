export class IotFirmwarePolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwarePolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwarePolicy" };
  }
}
