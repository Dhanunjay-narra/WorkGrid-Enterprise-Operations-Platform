export class HrPerformanceReviewCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrPerformanceReview:" + entityId);
  }
}
