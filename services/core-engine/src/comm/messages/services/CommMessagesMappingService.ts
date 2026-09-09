import { CommMessagesMappingModel, CommMessagesMappingValidator } from "@nexora/types/domains/comm/messages/CommMessagesMapping";

export class CommMessagesMappingService {
  private repository = new Map<string, CommMessagesMappingModel>();

  public create(data: Omit<CommMessagesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesMappingModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesMappingModel>): CommMessagesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesMappingModel = {
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
