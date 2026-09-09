export class IotAnomalyAlertCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IotAnomalyAlert with args:", args);
  }
}
