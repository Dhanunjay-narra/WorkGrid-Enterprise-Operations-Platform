export class TenantCommand {
  public static async execute(args: string[]): Promise<void> {
    console.log(`[CLI] Executing tenant with arguments:`, args);
  }
}
