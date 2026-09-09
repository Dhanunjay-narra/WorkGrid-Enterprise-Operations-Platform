export type AuditQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditQueueStateMachine {
  private allowedTransitions: Record<AuditQueueState, AuditQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditQueueState, to: AuditQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditQueueState, to: AuditQueueState): AuditQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditQueue: " + from + " -> " + to);
    }
    return to;
  }
}
