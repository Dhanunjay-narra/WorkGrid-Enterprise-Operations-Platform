export type CommCallsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsPolicyStateMachine {
  private allowedTransitions: Record<CommCallsPolicyState, CommCallsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsPolicyState, to: CommCallsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsPolicyState, to: CommCallsPolicyState): CommCallsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
