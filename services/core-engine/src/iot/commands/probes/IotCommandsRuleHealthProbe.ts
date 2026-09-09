export class IotCommandsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsRule" };
  }
}
