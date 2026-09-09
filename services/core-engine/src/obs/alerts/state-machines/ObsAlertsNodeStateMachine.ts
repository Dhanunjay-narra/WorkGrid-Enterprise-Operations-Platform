export type ObsAlertsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsNodeStateMachine {
  private allowedTransitions: Record<ObsAlertsNodeState, ObsAlertsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsNodeState, to: ObsAlertsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsNodeState, to: ObsAlertsNodeState): ObsAlertsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsNode: " + from + " -> " + to);
    }
    return to;
  }
}
