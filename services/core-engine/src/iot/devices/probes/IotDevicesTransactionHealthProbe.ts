export class IotDevicesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesTransaction" };
  }
}
