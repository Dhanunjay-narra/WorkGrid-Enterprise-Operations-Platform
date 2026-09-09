export class IotLocationsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsBatch" };
  }
}
