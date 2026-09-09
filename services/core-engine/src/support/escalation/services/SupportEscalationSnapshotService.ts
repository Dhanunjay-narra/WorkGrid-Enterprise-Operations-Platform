import { SupportEscalationSnapshotModel, SupportEscalationSnapshotValidator } from "@nexora/types/domains/support/escalation/SupportEscalationSnapshot";

export class SupportEscalationSnapshotService {
  private repository = new Map<string, SupportEscalationSnapshotModel>();

  public create(data: Omit<SupportEscalationSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationSnapshotModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationSnapshotModel>): SupportEscalationSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationSnapshotModel = {
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
