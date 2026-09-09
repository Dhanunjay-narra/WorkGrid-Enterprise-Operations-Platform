export type SecurityQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityQueueStateMachine {
  private allowedTransitions: Record<SecurityQueueState, SecurityQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityQueueState, to: SecurityQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityQueueState, to: SecurityQueueState): SecurityQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityQueue: " + from + " -> " + to);
    }
    return to;
  }
}
