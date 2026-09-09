export class SecThreatEventCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for SecThreatEvent with args:", args);
  }
}
