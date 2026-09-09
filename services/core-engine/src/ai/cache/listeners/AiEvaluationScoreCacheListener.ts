export class AiEvaluationScoreCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for AiEvaluationScore:" + entityId);
  }
}
