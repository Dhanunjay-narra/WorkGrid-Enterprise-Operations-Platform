import { AiDocumentChunkData, AiDocumentChunkValidator } from "../../../../packages/types/src/domains/ai/AiDocumentChunk";

export class AiDocumentChunkService {
  private repository = new Map<string, AiDocumentChunkData>();

  public create(data: Omit<AiDocumentChunkData, "id" | "createdAt" | "updatedAt">): AiDocumentChunkData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiDocumentChunkData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiDocumentChunkValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiDocumentChunk: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiDocumentChunkData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiDocumentChunkData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiDocumentChunkData>): AiDocumentChunkData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiDocumentChunkData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
