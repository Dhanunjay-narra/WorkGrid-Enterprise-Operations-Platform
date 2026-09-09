import { SupportAgentsSnapshotModel, SupportAgentsSnapshotValidator } from "@nexora/types/domains/support/agents/SupportAgentsSnapshot";

export class SupportAgentsSnapshotService {
  private repository = new Map<string, SupportAgentsSnapshotModel>();

  public create(data: Omit<SupportAgentsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsSnapshotModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsSnapshotModel>): SupportAgentsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsSnapshotModel = {
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
