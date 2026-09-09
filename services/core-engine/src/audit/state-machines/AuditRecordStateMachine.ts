export type AuditRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditRecordStateMachine {
  private allowedTransitions: Record<AuditRecordState, AuditRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditRecordState, to: AuditRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditRecordState, to: AuditRecordState): AuditRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditRecord: " + from + " -> " + to);
    }
    return to;
  }
}
