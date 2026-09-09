export class WfWorkflowExecutionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for WfWorkflowExecution:" + entityId);
  }
}
