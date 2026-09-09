export type SecurityNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityNodeStateMachine {
  private allowedTransitions: Record<SecurityNodeState, SecurityNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityNodeState, to: SecurityNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityNodeState, to: SecurityNodeState): SecurityNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityNode: " + from + " -> " + to);
    }
    return to;
  }
}
