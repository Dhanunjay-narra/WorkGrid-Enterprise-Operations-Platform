export type ObsAlertsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsItemStateMachine {
  private allowedTransitions: Record<ObsAlertsItemState, ObsAlertsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsItemState, to: ObsAlertsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsItemState, to: ObsAlertsItemState): ObsAlertsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsItem: " + from + " -> " + to);
    }
    return to;
  }
}
