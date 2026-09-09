export class WfExecutionStepMetricRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched WfExecutionStepMetric action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "workflow", executedAt: new Date().toISOString() } };
  }
}
