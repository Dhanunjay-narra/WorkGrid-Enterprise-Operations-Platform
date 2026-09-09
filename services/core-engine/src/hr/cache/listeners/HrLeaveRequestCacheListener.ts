export class HrLeaveRequestCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrLeaveRequest:" + entityId);
  }
}
