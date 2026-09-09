export class HrTimesheetCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrTimesheet:" + entityId);
  }
}
