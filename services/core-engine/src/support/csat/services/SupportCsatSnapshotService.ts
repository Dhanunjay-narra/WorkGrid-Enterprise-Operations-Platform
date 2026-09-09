import { SupportCsatSnapshotModel, SupportCsatSnapshotValidator } from "@nexora/types/domains/support/csat/SupportCsatSnapshot";

export class SupportCsatSnapshotService {
  private repository = new Map<string, SupportCsatSnapshotModel>();

  public create(data: Omit<SupportCsatSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatSnapshotModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatSnapshotModel>): SupportCsatSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatSnapshotModel = {
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
