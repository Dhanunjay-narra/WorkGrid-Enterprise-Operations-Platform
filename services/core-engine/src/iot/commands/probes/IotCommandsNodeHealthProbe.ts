export class IotCommandsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsNode" };
  }
}
