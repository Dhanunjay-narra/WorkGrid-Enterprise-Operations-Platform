export class IdSecurityKeyCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IdSecurityKey with args:", args);
  }
}
