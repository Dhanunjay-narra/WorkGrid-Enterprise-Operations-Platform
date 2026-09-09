export type AiEmbeddingsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEmbeddingsNodeStateMachine {
  private allowedTransitions: Record<AiEmbeddingsNodeState, AiEmbeddingsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEmbeddingsNodeState, to: AiEmbeddingsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEmbeddingsNodeState, to: AiEmbeddingsNodeState): AiEmbeddingsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEmbeddingsNode: " + from + " -> " + to);
    }
    return to;
  }
}
