export class AiAgentExecutionLogCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for AiAgentExecutionLog:" + entityId);
  }
}
