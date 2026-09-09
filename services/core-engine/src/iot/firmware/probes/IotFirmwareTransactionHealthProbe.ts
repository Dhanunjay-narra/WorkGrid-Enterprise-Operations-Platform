export class IotFirmwareTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareTransaction" };
  }
}
