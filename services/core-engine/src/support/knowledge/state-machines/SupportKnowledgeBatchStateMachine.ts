export type SupportKnowledgeBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportKnowledgeBatchStateMachine {
  private allowedTransitions: Record<SupportKnowledgeBatchState, SupportKnowledgeBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportKnowledgeBatchState, to: SupportKnowledgeBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportKnowledgeBatchState, to: SupportKnowledgeBatchState): SupportKnowledgeBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportKnowledgeBatch: " + from + " -> " + to);
    }
    return to;
  }
}
