export type BiForecastsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsAuditLogStateMachine {
  private allowedTransitions: Record<BiForecastsAuditLogState, BiForecastsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsAuditLogState, to: BiForecastsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsAuditLogState, to: BiForecastsAuditLogState): BiForecastsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
