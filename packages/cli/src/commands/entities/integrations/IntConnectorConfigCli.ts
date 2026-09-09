export class IntConnectorConfigCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IntConnectorConfig with args:", args);
  }
}
