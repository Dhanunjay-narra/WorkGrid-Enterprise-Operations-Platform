export class HrInterviewStageCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrInterviewStage:" + entityId);
  }
}
