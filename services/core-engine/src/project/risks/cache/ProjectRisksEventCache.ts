export class ProjectRisksEventCache {
  private cache = new Map<string, { val: any; exp: number }>();

  public async get(id: string): Promise<any | null> {
    const entry = this.cache.get(id);
    if (!entry || entry.exp < Date.now()) return null;
    return entry.val;
  }

  public async set(id: string, val: any, ttlSeconds: number = 300): Promise<void> {
    this.cache.set(id, { val, exp: Date.now() + ttlSeconds * 1000 });
  }

  public async evict(id: string): Promise<void> {
    this.cache.delete(id);
  }
}
