export class WfApprovalTaskCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for WfApprovalTask:" + entityId);
  }
}
