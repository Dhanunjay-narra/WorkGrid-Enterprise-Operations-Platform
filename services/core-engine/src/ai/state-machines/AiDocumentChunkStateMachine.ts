export type AiDocumentChunkState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiDocumentChunkStateMachine {
  private validTransitions: Record<AiDocumentChunkState, AiDocumentChunkState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiDocumentChunkState, next: AiDocumentChunkState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiDocumentChunkState, next: AiDocumentChunkState): AiDocumentChunkState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiDocumentChunk: from " + current + " to " + next);
    }
    return next;
  }
}
