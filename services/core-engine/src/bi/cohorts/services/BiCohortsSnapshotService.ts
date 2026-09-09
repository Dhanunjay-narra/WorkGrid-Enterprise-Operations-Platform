import { BiCohortsSnapshotModel, BiCohortsSnapshotValidator } from "@nexora/types/domains/bi/cohorts/BiCohortsSnapshot";

export class BiCohortsSnapshotService {
  private repository = new Map<string, BiCohortsSnapshotModel>();

  public create(data: Omit<BiCohortsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): BiCohortsSnapshotModel {
    const id = "bi_c_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiCohortsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiCohortsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiCohortsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiCohortsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiCohortsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiCohortsSnapshotModel>): BiCohortsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiCohortsSnapshotModel = {
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
