export type BiDashboardsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsRecordStateMachine {
  private allowedTransitions: Record<BiDashboardsRecordState, BiDashboardsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsRecordState, to: BiDashboardsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsRecordState, to: BiDashboardsRecordState): BiDashboardsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
