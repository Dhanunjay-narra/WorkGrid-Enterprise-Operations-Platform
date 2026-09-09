export type ObsAlertsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsEventStateMachine {
  private allowedTransitions: Record<ObsAlertsEventState, ObsAlertsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsEventState, to: ObsAlertsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsEventState, to: ObsAlertsEventState): ObsAlertsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
