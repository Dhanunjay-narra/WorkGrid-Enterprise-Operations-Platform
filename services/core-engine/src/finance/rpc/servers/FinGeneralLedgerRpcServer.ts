export class FinGeneralLedgerRpcServer {
  public async handleRpcRequest(method: string, params: Record<string, any>): Promise<any> {
    console.log("[RPC-SERVER] Handled FinGeneralLedger method " + method);
    return { success: true, processedAt: new Date().toISOString() };
  }
}
