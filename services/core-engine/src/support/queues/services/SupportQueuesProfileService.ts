import { SupportQueuesProfileModel, SupportQueuesProfileValidator } from "@nexora/types/domains/support/queues/SupportQueuesProfile";

export class SupportQueuesProfileService {
  private repository = new Map<string, SupportQueuesProfileModel>();

  public create(data: Omit<SupportQueuesProfileModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesProfileModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesProfileModel>): SupportQueuesProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesProfileModel = {
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
