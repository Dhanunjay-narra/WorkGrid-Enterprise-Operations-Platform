export type ObsAlertsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsAuditLogStateMachine {
  private allowedTransitions: Record<ObsAlertsAuditLogState, ObsAlertsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsAuditLogState, to: ObsAlertsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsAuditLogState, to: ObsAlertsAuditLogState): ObsAlertsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
