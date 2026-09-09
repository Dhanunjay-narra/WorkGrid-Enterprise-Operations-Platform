export class IntHealthCheckPingCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IntHealthCheckPing with args:", args);
  }
}
