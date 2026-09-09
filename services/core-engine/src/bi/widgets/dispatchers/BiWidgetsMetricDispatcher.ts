export class BiWidgetsMetricDispatcher {
  public static async dispatchCommand(commandName: string, payload: Record<string, any>): Promise<{ commandId: string; status: string }> {
    const commandId = "cmd_bi_w_" + Math.random().toString(36).substring(2, 9);
    return { commandId, status: "DISPATCHED" };
  }
}
