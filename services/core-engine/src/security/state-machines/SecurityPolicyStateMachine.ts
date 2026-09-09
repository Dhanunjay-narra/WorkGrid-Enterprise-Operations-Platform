export type SecurityPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityPolicyStateMachine {
  private allowedTransitions: Record<SecurityPolicyState, SecurityPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityPolicyState, to: SecurityPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityPolicyState, to: SecurityPolicyState): SecurityPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
