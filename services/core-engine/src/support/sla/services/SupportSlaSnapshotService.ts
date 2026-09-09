import { SupportSlaSnapshotModel, SupportSlaSnapshotValidator } from "@nexora/types/domains/support/sla/SupportSlaSnapshot";

export class SupportSlaSnapshotService {
  private repository = new Map<string, SupportSlaSnapshotModel>();

  public create(data: Omit<SupportSlaSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaSnapshotModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaSnapshotModel>): SupportSlaSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaSnapshotModel = {
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
