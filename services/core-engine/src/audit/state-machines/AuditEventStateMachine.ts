export type AuditEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditEventStateMachine {
  private allowedTransitions: Record<AuditEventState, AuditEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditEventState, to: AuditEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditEventState, to: AuditEventState): AuditEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditEvent: " + from + " -> " + to);
    }
    return to;
  }
}
