import { CommDigestConfigModel, CommDigestConfigValidator } from "@nexora/types/domains/comm/digest/CommDigestConfig";

export class CommDigestConfigService {
  private repository = new Map<string, CommDigestConfigModel>();

  public create(data: Omit<CommDigestConfigModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestConfigModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestConfigModel>): CommDigestConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestConfigModel = {
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
