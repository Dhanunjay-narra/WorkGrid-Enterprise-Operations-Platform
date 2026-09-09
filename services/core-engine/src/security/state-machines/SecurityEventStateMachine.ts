export type SecurityEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityEventStateMachine {
  private allowedTransitions: Record<SecurityEventState, SecurityEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityEventState, to: SecurityEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityEventState, to: SecurityEventState): SecurityEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityEvent: " + from + " -> " + to);
    }
    return to;
  }
}
