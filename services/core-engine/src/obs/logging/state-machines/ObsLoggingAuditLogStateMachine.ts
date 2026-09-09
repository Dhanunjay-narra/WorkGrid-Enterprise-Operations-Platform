export type ObsLoggingAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingAuditLogStateMachine {
  private allowedTransitions: Record<ObsLoggingAuditLogState, ObsLoggingAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingAuditLogState, to: ObsLoggingAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingAuditLogState, to: ObsLoggingAuditLogState): ObsLoggingAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
