export class IdMfaConfigCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IdMfaConfig with args:", args);
  }
}
