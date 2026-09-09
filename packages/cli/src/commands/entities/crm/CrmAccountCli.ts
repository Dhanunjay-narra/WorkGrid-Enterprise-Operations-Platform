export class CrmAccountCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CrmAccount with args:", args);
  }
}
