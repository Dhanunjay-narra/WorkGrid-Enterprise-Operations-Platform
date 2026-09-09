export type CommDigestPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestPolicyStateMachine {
  private allowedTransitions: Record<CommDigestPolicyState, CommDigestPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestPolicyState, to: CommDigestPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestPolicyState, to: CommDigestPolicyState): CommDigestPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
