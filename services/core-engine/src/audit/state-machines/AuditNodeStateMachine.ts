export type AuditNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditNodeStateMachine {
  private allowedTransitions: Record<AuditNodeState, AuditNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditNodeState, to: AuditNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditNodeState, to: AuditNodeState): AuditNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditNode: " + from + " -> " + to);
    }
    return to;
  }
}
