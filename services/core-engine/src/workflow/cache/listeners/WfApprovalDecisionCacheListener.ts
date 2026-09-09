export class WfApprovalDecisionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for WfApprovalDecision:" + entityId);
  }
}
