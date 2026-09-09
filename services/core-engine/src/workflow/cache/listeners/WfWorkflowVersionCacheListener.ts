export class WfWorkflowVersionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for WfWorkflowVersion:" + entityId);
  }
}
