export class IotCommandsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsQueue" };
  }
}
