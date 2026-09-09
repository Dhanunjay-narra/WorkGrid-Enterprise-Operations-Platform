export class WfRetryPolicyCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for WfRetryPolicy with args:", args);
  }
}
