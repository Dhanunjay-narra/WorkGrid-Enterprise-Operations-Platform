import { CommDigestEntryModel, CommDigestEntryValidator } from "@nexora/types/domains/comm/digest/CommDigestEntry";

export class CommDigestEntryService {
  private repository = new Map<string, CommDigestEntryModel>();

  public create(data: Omit<CommDigestEntryModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestEntryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestEntryModel>): CommDigestEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestEntryModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
