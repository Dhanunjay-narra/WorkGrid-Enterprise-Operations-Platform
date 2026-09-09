import { AiPromptTemplateData, AiPromptTemplateValidator } from "../../../../packages/types/src/domains/ai/AiPromptTemplate";

export class AiPromptTemplateService {
  private repository = new Map<string, AiPromptTemplateData>();

  public create(data: Omit<AiPromptTemplateData, "id" | "createdAt" | "updatedAt">): AiPromptTemplateData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiPromptTemplateData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptTemplateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptTemplate: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptTemplateData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiPromptTemplateData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiPromptTemplateData>): AiPromptTemplateData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptTemplateData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
