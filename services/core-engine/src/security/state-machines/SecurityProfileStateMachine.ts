export type SecurityProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityProfileStateMachine {
  private allowedTransitions: Record<SecurityProfileState, SecurityProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityProfileState, to: SecurityProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityProfileState, to: SecurityProfileState): SecurityProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityProfile: " + from + " -> " + to);
    }
    return to;
  }
}
