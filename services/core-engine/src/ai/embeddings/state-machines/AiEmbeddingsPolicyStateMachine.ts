export type AiEmbeddingsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEmbeddingsPolicyStateMachine {
  private allowedTransitions: Record<AiEmbeddingsPolicyState, AiEmbeddingsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEmbeddingsPolicyState, to: AiEmbeddingsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEmbeddingsPolicyState, to: AiEmbeddingsPolicyState): AiEmbeddingsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEmbeddingsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
