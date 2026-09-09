export type ObsAlertsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsMappingStateMachine {
  private allowedTransitions: Record<ObsAlertsMappingState, ObsAlertsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsMappingState, to: ObsAlertsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsMappingState, to: ObsAlertsMappingState): ObsAlertsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
