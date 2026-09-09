export class BiDataSourceCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for BiDataSource with args:", args);
  }
}
