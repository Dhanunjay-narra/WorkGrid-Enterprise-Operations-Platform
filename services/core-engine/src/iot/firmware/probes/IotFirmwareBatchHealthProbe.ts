export class IotFirmwareBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareBatch" };
  }
}
