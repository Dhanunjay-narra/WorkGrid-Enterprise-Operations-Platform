export class AiConfidenceScorecardCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for AiConfidenceScorecard:" + entityId);
  }
}
