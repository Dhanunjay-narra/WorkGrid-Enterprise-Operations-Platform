export type DmsOcrAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrAuditLogStateMachine {
  private allowedTransitions: Record<DmsOcrAuditLogState, DmsOcrAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrAuditLogState, to: DmsOcrAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrAuditLogState, to: DmsOcrAuditLogState): DmsOcrAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
