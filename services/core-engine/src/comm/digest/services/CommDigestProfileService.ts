import { CommDigestProfileModel, CommDigestProfileValidator } from "@nexora/types/domains/comm/digest/CommDigestProfile";

export class CommDigestProfileService {
  private repository = new Map<string, CommDigestProfileModel>();

  public create(data: Omit<CommDigestProfileModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestProfileModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestProfileModel>): CommDigestProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestProfileModel = {
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
