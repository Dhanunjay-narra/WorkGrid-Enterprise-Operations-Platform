export class IdPolicyCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IdPolicy with args:", args);
  }
}
