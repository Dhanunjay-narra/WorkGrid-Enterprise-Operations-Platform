export class WfWorkflowNodeCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for WfWorkflowNode:" + entityId);
  }
}
