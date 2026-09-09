export type ObsAlertsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsRecordStateMachine {
  private allowedTransitions: Record<ObsAlertsRecordState, ObsAlertsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsRecordState, to: ObsAlertsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsRecordState, to: ObsAlertsRecordState): ObsAlertsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
