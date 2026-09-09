export type SecurityEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityEntryStateMachine {
  private allowedTransitions: Record<SecurityEntryState, SecurityEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityEntryState, to: SecurityEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityEntryState, to: SecurityEntryState): SecurityEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityEntry: " + from + " -> " + to);
    }
    return to;
  }
}
