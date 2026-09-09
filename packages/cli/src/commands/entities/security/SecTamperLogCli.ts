export class SecTamperLogCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for SecTamperLog with args:", args);
  }
}
