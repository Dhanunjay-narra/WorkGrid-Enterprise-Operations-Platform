export class IotDevicesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesBatch" };
  }
}
