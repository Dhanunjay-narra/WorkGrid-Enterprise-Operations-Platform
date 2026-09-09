export type AuditEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditEntryStateMachine {
  private allowedTransitions: Record<AuditEntryState, AuditEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditEntryState, to: AuditEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditEntryState, to: AuditEntryState): AuditEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditEntry: " + from + " -> " + to);
    }
    return to;
  }
}
