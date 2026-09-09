export type ObsAlertsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsBatchStateMachine {
  private allowedTransitions: Record<ObsAlertsBatchState, ObsAlertsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsBatchState, to: ObsAlertsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsBatchState, to: ObsAlertsBatchState): ObsAlertsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
