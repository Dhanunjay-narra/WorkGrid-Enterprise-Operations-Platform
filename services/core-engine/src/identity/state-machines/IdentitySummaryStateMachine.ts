export type IdentitySummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentitySummaryStateMachine {
  private allowedTransitions: Record<IdentitySummaryState, IdentitySummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentitySummaryState, to: IdentitySummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentitySummaryState, to: IdentitySummaryState): IdentitySummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentitySummary: " + from + " -> " + to);
    }
    return to;
  }
}
