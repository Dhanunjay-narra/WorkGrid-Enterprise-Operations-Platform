export class SecBlockedIpRecordRpcServer {
  public async handleRpcRequest(method: string, params: Record<string, any>): Promise<any> {
    console.log("[RPC-SERVER] Handled SecBlockedIpRecord method " + method);
    return { success: true, processedAt: new Date().toISOString() };
  }
}
