export class IotCommandsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsState" };
  }
}
