export class HrDepartmentCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrDepartment:" + entityId);
  }
}
