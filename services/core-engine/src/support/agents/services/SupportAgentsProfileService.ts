import { SupportAgentsProfileModel, SupportAgentsProfileValidator } from "@nexora/types/domains/support/agents/SupportAgentsProfile";

export class SupportAgentsProfileService {
  private repository = new Map<string, SupportAgentsProfileModel>();

  public create(data: Omit<SupportAgentsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsProfileModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsProfileModel>): SupportAgentsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsProfileModel = {
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
