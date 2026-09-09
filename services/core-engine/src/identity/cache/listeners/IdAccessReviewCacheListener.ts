export class IdAccessReviewCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IdAccessReview:" + entityId);
  }
}
