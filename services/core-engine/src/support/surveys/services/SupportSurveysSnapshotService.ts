import { SupportSurveysSnapshotModel, SupportSurveysSnapshotValidator } from "@nexora/types/domains/support/surveys/SupportSurveysSnapshot";

export class SupportSurveysSnapshotService {
  private repository = new Map<string, SupportSurveysSnapshotModel>();

  public create(data: Omit<SupportSurveysSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysSnapshotModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysSnapshotModel>): SupportSurveysSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysSnapshotModel = {
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
