export type DmsFoldersAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersAuditLogStateMachine {
  private allowedTransitions: Record<DmsFoldersAuditLogState, DmsFoldersAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersAuditLogState, to: DmsFoldersAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersAuditLogState, to: DmsFoldersAuditLogState): DmsFoldersAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
