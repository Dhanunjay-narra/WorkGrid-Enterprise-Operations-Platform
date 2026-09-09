export class HrTimesheetRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched HrTimesheet action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "hr", executedAt: new Date().toISOString() } };
  }
}
