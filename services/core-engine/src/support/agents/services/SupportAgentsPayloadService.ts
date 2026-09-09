import { SupportAgentsPayloadModel, SupportAgentsPayloadValidator } from "@nexora/types/domains/support/agents/SupportAgentsPayload";

export class SupportAgentsPayloadService {
  private repository = new Map<string, SupportAgentsPayloadModel>();

  public create(data: Omit<SupportAgentsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsPayloadModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsPayloadModel>): SupportAgentsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsPayloadModel = {
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
