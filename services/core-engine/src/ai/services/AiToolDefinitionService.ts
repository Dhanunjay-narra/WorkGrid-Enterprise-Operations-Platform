import { AiToolDefinitionData, AiToolDefinitionValidator } from "../../../../packages/types/src/domains/ai/AiToolDefinition";

export class AiToolDefinitionService {
  private repository = new Map<string, AiToolDefinitionData>();

  public create(data: Omit<AiToolDefinitionData, "id" | "createdAt" | "updatedAt">): AiToolDefinitionData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiToolDefinitionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolDefinitionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolDefinition: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolDefinitionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiToolDefinitionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiToolDefinitionData>): AiToolDefinitionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolDefinitionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
