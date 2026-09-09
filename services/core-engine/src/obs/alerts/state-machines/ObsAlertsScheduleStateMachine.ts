export type ObsAlertsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsScheduleStateMachine {
  private allowedTransitions: Record<ObsAlertsScheduleState, ObsAlertsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsScheduleState, to: ObsAlertsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsScheduleState, to: ObsAlertsScheduleState): ObsAlertsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
