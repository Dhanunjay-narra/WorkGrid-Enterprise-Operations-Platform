export type AiEmbeddingsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEmbeddingsEntryStateMachine {
  private allowedTransitions: Record<AiEmbeddingsEntryState, AiEmbeddingsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEmbeddingsEntryState, to: AiEmbeddingsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEmbeddingsEntryState, to: AiEmbeddingsEntryState): AiEmbeddingsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEmbeddingsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
