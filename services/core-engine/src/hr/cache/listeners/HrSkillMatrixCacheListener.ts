export class HrSkillMatrixCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrSkillMatrix:" + entityId);
  }
}
