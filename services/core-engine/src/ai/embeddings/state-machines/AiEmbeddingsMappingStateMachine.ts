export type AiEmbeddingsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEmbeddingsMappingStateMachine {
  private allowedTransitions: Record<AiEmbeddingsMappingState, AiEmbeddingsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEmbeddingsMappingState, to: AiEmbeddingsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEmbeddingsMappingState, to: AiEmbeddingsMappingState): AiEmbeddingsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEmbeddingsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
