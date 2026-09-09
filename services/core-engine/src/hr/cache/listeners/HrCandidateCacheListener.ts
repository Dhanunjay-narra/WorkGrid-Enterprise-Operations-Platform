export class HrCandidateCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrCandidate:" + entityId);
  }
}
