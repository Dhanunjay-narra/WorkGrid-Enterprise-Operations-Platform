export type RbacSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacSummaryStateMachine {
  private allowedTransitions: Record<RbacSummaryState, RbacSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacSummaryState, to: RbacSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacSummaryState, to: RbacSummaryState): RbacSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacSummary: " + from + " -> " + to);
    }
    return to;
  }
}
