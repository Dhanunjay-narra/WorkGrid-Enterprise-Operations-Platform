export class IdSsoConfigCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IdSsoConfig with args:", args);
  }
}
