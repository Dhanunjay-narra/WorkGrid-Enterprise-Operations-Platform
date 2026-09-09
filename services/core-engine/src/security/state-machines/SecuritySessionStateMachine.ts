export type SecuritySessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecuritySessionStateMachine {
  private allowedTransitions: Record<SecuritySessionState, SecuritySessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecuritySessionState, to: SecuritySessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecuritySessionState, to: SecuritySessionState): SecuritySessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecuritySession: " + from + " -> " + to);
    }
    return to;
  }
}
