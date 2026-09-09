export class BiReportScheduleRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched BiReportSchedule action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "analytics", executedAt: new Date().toISOString() } };
  }
}
