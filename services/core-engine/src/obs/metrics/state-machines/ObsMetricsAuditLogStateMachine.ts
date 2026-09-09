export type ObsMetricsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsAuditLogStateMachine {
  private allowedTransitions: Record<ObsMetricsAuditLogState, ObsMetricsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsAuditLogState, to: ObsMetricsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsAuditLogState, to: ObsMetricsAuditLogState): ObsMetricsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
