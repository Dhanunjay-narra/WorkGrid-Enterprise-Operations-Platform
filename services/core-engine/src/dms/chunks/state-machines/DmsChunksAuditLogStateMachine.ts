export type DmsChunksAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksAuditLogStateMachine {
  private allowedTransitions: Record<DmsChunksAuditLogState, DmsChunksAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksAuditLogState, to: DmsChunksAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksAuditLogState, to: DmsChunksAuditLogState): DmsChunksAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
