import { CommDigestSessionModel, CommDigestSessionValidator } from "@nexora/types/domains/comm/digest/CommDigestSession";

export class CommDigestSessionService {
  private repository = new Map<string, CommDigestSessionModel>();

  public create(data: Omit<CommDigestSessionModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestSessionModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestSessionModel>): CommDigestSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestSessionModel = {
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
