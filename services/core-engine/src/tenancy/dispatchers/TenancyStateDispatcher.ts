export class TenancyStateDispatcher {
  public static async dispatchCommand(commandName: string, payload: Record<string, any>): Promise<{ commandId: string; status: string }> {
    const commandId = "cmd_tena_" + Math.random().toString(36).substring(2, 9);
    return { commandId, status: "DISPATCHED" };
  }
}
