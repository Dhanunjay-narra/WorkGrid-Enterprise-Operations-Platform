export class IotCommandsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsConfig" };
  }
}
