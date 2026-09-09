export class HrLeavePolicyCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrLeavePolicy:" + entityId);
  }
}
