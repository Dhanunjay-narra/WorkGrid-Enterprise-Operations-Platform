export type CommChannelsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsAuditLogStateMachine {
  private allowedTransitions: Record<CommChannelsAuditLogState, CommChannelsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsAuditLogState, to: CommChannelsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsAuditLogState, to: CommChannelsAuditLogState): CommChannelsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
