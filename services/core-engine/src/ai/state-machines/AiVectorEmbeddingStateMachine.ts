export type AiVectorEmbeddingState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiVectorEmbeddingStateMachine {
  private validTransitions: Record<AiVectorEmbeddingState, AiVectorEmbeddingState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiVectorEmbeddingState, next: AiVectorEmbeddingState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiVectorEmbeddingState, next: AiVectorEmbeddingState): AiVectorEmbeddingState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiVectorEmbedding: from " + current + " to " + next);
    }
    return next;
  }
}
