export type SecurityConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityConfigStateMachine {
  private allowedTransitions: Record<SecurityConfigState, SecurityConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityConfigState, to: SecurityConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityConfigState, to: SecurityConfigState): SecurityConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityConfig: " + from + " -> " + to);
    }
    return to;
  }
}
