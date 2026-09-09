import { CommCallsPayloadModel, CommCallsPayloadValidator } from "@nexora/types/domains/comm/calls/CommCallsPayload";

export class CommCallsPayloadService {
  private repository = new Map<string, CommCallsPayloadModel>();

  public create(data: Omit<CommCallsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsPayloadModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsPayloadModel>): CommCallsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsPayloadModel = {
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
