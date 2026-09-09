export class HrOnboardingChecklistCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrOnboardingChecklist:" + entityId);
  }
}
