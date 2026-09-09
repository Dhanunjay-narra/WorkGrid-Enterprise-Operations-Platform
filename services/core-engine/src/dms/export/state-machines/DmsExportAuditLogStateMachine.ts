export type DmsExportAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportAuditLogStateMachine {
  private allowedTransitions: Record<DmsExportAuditLogState, DmsExportAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportAuditLogState, to: DmsExportAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportAuditLogState, to: DmsExportAuditLogState): DmsExportAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
