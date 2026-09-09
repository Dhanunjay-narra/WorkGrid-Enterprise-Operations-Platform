export class IdTenantCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IdTenant with args:", args);
  }
}
