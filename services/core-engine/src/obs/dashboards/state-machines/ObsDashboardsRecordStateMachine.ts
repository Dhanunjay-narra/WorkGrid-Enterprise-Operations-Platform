export type ObsDashboardsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsRecordStateMachine {
  private allowedTransitions: Record<ObsDashboardsRecordState, ObsDashboardsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsRecordState, to: ObsDashboardsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsRecordState, to: ObsDashboardsRecordState): ObsDashboardsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
