export type DmsFilesAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesAuditLogStateMachine {
  private allowedTransitions: Record<DmsFilesAuditLogState, DmsFilesAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesAuditLogState, to: DmsFilesAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesAuditLogState, to: DmsFilesAuditLogState): DmsFilesAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
