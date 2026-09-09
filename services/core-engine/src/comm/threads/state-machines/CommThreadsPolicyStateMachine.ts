export type CommThreadsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsPolicyStateMachine {
  private allowedTransitions: Record<CommThreadsPolicyState, CommThreadsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsPolicyState, to: CommThreadsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsPolicyState, to: CommThreadsPolicyState): CommThreadsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
