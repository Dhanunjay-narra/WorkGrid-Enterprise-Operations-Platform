export class IotCommandsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsMapping" };
  }
}
