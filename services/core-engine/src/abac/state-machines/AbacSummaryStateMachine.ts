export type AbacSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacSummaryStateMachine {
  private allowedTransitions: Record<AbacSummaryState, AbacSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacSummaryState, to: AbacSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacSummaryState, to: AbacSummaryState): AbacSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacSummary: " + from + " -> " + to);
    }
    return to;
  }
}
