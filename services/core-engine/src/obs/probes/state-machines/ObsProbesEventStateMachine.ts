export type ObsProbesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesEventStateMachine {
  private allowedTransitions: Record<ObsProbesEventState, ObsProbesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesEventState, to: ObsProbesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesEventState, to: ObsProbesEventState): ObsProbesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
