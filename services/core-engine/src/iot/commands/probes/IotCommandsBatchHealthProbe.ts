export class IotCommandsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsBatch" };
  }
}
