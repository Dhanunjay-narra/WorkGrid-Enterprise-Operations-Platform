export class IotCommandsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsTask" };
  }
}
