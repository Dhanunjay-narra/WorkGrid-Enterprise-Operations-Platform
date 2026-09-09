import { IntSlackProfileModel, IntSlackProfileValidator } from "@nexora/types/domains/int/slack/IntSlackProfile";

export class IntSlackProfileService {
  private repository = new Map<string, IntSlackProfileModel>();

  public create(data: Omit<IntSlackProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackProfileModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackProfileModel>): IntSlackProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackProfileModel = {
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
