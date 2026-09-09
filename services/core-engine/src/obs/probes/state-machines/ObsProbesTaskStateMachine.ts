export type ObsProbesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesTaskStateMachine {
  private allowedTransitions: Record<ObsProbesTaskState, ObsProbesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesTaskState, to: ObsProbesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesTaskState, to: ObsProbesTaskState): ObsProbesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesTask: " + from + " -> " + to);
    }
    return to;
  }
}
