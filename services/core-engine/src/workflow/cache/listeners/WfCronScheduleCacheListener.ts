export class WfCronScheduleCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for WfCronSchedule:" + entityId);
  }
}
