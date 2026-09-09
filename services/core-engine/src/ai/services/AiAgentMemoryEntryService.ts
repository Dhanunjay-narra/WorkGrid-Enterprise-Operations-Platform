import { AiAgentMemoryEntryData, AiAgentMemoryEntryValidator } from "../../../../packages/types/src/domains/ai/AiAgentMemoryEntry";

export class AiAgentMemoryEntryService {
  private repository = new Map<string, AiAgentMemoryEntryData>();

  public create(data: Omit<AiAgentMemoryEntryData, "id" | "createdAt" | "updatedAt">): AiAgentMemoryEntryData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiAgentMemoryEntryData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentMemoryEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentMemoryEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentMemoryEntryData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiAgentMemoryEntryData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiAgentMemoryEntryData>): AiAgentMemoryEntryData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentMemoryEntryData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
