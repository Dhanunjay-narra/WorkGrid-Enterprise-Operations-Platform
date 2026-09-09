export type CommPresencePolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresencePolicyStateMachine {
  private allowedTransitions: Record<CommPresencePolicyState, CommPresencePolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresencePolicyState, to: CommPresencePolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresencePolicyState, to: CommPresencePolicyState): CommPresencePolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresencePolicy: " + from + " -> " + to);
    }
    return to;
  }
}
